import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { articles, type ContentBlock } from './articlesData';
import './ArticlesList.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const PAGE_SIZE = 20;

type SortMode = 'newest' | 'oldest' | 'title';

// Search helpers: the list used to search title, subtitle and tags only,
// so anything explained in the article body was invisible to search.
// Search now scans the full article text, ranked by where it matched.
const SEARCH_SYNONYMS: Record<string, string> = {
  ml: 'machine learning',
  ai: 'artificial intelligence',
  nlp: 'natural language processing',
  llm: 'large language model',
  rag: 'retrieval augmented generation',
  rl: 'reinforcement learning',
  swa: 'stochastic weight averaging',
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const blockSearchText = (block: ContentBlock) => {
  switch (block.type) {
    case 'list':
      return block.items.join(' ');
    case 'code':
      return `${block.language} ${block.code}`;
    case 'divider':
      return '';
    default:
      return block.text;
  }
};

interface SearchableArticle {
  article: (typeof articles)[number];
  index: number;
  title: string;
  subtitle: string;
  tags: string[];
  body: string;
  tokens: Set<string>;
}

const wordMatches = (word: string, tokens: Set<string>) => {
  if (tokens.has(word)) return true;
  // Short queries must match a whole word, otherwise "ai" matches
  // "training" and "ml" matches anything containing those letters.
  if (word.length <= 2) return false;
  for (const token of tokens) {
    if (token.startsWith(word)) return true;
  }
  return false;
};

// Returns a relevance score, or null when the article does not match.
// Title and tag matches rank first, then subtitle, then a phrase in the
// body, then the query words scattered through the body.
const searchScore = (entry: SearchableArticle, phrase: string, words: string[]) => {
  let score = 0;
  if (entry.title.includes(phrase)) score += 100;
  if (entry.tags.some((tag) => tag === phrase || tag.includes(phrase))) score += 80;
  if (entry.subtitle.includes(phrase)) score += 60;
  if (entry.body.includes(phrase)) score += 40;
  const expanded = SEARCH_SYNONYMS[phrase];
  if (
    expanded &&
    (entry.title.includes(expanded) ||
      entry.tags.some((tag) => tag.includes(expanded)) ||
      entry.body.includes(expanded))
  ) {
    score += 40;
  }
  if (!words.every((word) => wordMatches(word, entry.tokens))) return null;
  score += 10;
  return score;
};

const ArticlesList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>('newest');
  const [page, setPage] = useState(1);

  // Topic filters: only tags shared by at least 10 articles, so the row
  // stays usable. "Interview Prep" is on almost every article, so it
  // would not narrow anything down and is left out.
  const topicTags = useMemo(() => {
    const counts = new Map<string, number>();
    articles.forEach((article) => {
      article.tags.forEach((tag) => {
        if (tag === 'Interview Prep') return;
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      });
    });
    return [...counts.entries()]
      .filter(([, count]) => count >= 10)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag, count]) => ({ tag, count }));
  }, []);

  // One searchable record per article, built once: normalised title,
  // subtitle, tags and full body text, plus the set of words in them.
  const searchableArticles = useMemo<SearchableArticle[]>(
    () =>
      articles.map((article, index) => {
        const title = normalizeText(article.title);
        const subtitle = normalizeText(article.subtitle);
        const tags = article.tags.map(normalizeText);
        const body = normalizeText(article.content.map(blockSearchText).join(' '));
        return {
          article,
          index,
          title,
          subtitle,
          tags,
          body,
          tokens: new Set(`${title} ${subtitle} ${tags.join(' ')} ${body}`.split(' ')),
        };
      }),
    [],
  );

  const sortedArticles = useMemo(() => {
    const phrase = normalizeText(searchQuery);
    const words = phrase.split(' ').filter(Boolean);

    // Search and tag filter are exclusive: typing a search clears the
    // tag, and clicking a tag clears the search (see the handlers
    // below). That stops the old bug where a tag filter AND a search
    // for a different tag combined to zero results.
    if (phrase) {
      const scored = searchableArticles
        .map((entry) => ({ entry, score: searchScore(entry, phrase, words) }))
        .filter((item): item is { entry: SearchableArticle; score: number } => item.score !== null)
        .sort((a, b) => b.score - a.score || b.entry.index - a.entry.index);
      return scored.map(({ entry }) => entry.article);
    }

    const indexed = searchableArticles.filter(
      ({ article }) => selectedTag === null || article.tags.includes(selectedTag),
    );
    if (sortMode === 'title') {
      indexed.sort((a, b) => a.article.title.localeCompare(b.article.title));
    } else if (sortMode === 'oldest') {
      indexed.sort(
        (a, b) =>
          Date.parse(a.article.date) - Date.parse(b.article.date) || a.index - b.index,
      );
    } else {
      // Newest first. Dates are often identical, so the original index
      // breaks ties: articles were appended in order, so a higher index
      // is a newer article.
      indexed.sort(
        (a, b) =>
          Date.parse(b.article.date) - Date.parse(a.article.date) || b.index - a.index,
      );
    }
    return indexed.map(({ article }) => article);
  }, [searchQuery, selectedTag, sortMode, searchableArticles]);

  // A new search, topic or sort starts back on page 1.
  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedTag, sortMode]);

  const totalPages = Math.max(1, Math.ceil(sortedArticles.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageArticles = sortedArticles.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const showingFrom = sortedArticles.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(safePage * PAGE_SIZE, sortedArticles.length);

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(1, nextPage), totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compact page numbers: 1 … 4 5 6 … 16
  const pageNumbers = useMemo(() => {
    const pages: (number | '…')[] = [];
    const neighbours = [safePage - 1, safePage, safePage + 1].filter(
      (n) => n > 1 && n < totalPages,
    );
    const shown = [1, ...neighbours, totalPages];
    let prev = 0;
    shown.forEach((n) => {
      if (n - prev > 1) pages.push('…');
      pages.push(n);
      prev = n;
    });
    return pages;
  }, [safePage, totalPages]);

  const clearAll = () => {
    setSearchQuery('');
    setSelectedTag(null);
  };

  return (
    <div className="articles-list-container">
      <div className="articles-list-header">
        <h1 className="articles-list-title">Real ML Interview Questions</h1>
        <p className="articles-list-subtitle">
          Real questions from ML interviews at top AI companies — answered in depth, with intuition first and jargon second.
        </p>

        <div className="articles-search-container">
          <div className="articles-search-input-wrapper">
            <FaSearch className="articles-search-icon" />
            <input
              type="text"
              placeholder="Search titles, tags, and full article text..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                // Searching replaces the tag filter, so a search for a
                // different tag is not ANDed with the old one to zero.
                if (e.target.value.trim()) setSelectedTag(null);
              }}
              className="articles-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="articles-search-clear"
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        <div className="articles-controls">
          <label className="articles-sort-label">
            Sort
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="articles-sort-select"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="title">Title A–Z</option>
            </select>
          </label>
        </div>

        <div className="articles-filters" aria-label="Filter by topic">
          <button
            className={`articles-filter-chip${selectedTag === null ? ' active' : ''}`}
            onClick={() => setSelectedTag(null)}
          >
            All topics
          </button>
          {topicTags.map(({ tag, count }) => (
            <button
              key={tag}
              className={`articles-filter-chip${selectedTag === tag ? ' active' : ''}`}
              onClick={() => {
                const next = selectedTag === tag ? null : tag;
                setSelectedTag(next);
                if (next) setSearchQuery('');
              }}
              aria-pressed={selectedTag === tag}
            >
              {tag} ({count})
            </button>
          ))}
          {/* A tag clicked on a card can be a rare one with no chip above,
              so show it as the active filter instead of leaving the row blank. */}
          {selectedTag !== null && !topicTags.some(({ tag }) => tag === selectedTag) && (
            <button
              className="articles-filter-chip active"
              onClick={() => setSelectedTag(null)}
              aria-pressed
            >
              {selectedTag} ×
            </button>
          )}
        </div>

        <div className="articles-count">
          {sortedArticles.length === 0
            ? 'No articles'
            : `Showing ${showingFrom}–${showingTo} of ${sortedArticles.length} article${sortedArticles.length !== 1 ? 's' : ''}`}
        </div>
      </div>

      <div className="articles-feed">
        {pageArticles.length === 0 ? (
          <div className="articles-no-results">
            <p>No articles found matching &quot;{searchQuery}&quot;{selectedTag ? ` in ${selectedTag}` : ''}</p>
            <button onClick={clearAll} className="articles-reset-btn">
              Clear search and filters
            </button>
          </div>
        ) : (
          pageArticles.map((article) => (
          <article
            key={article.slug}
            className="article-preview-card"
            onClick={() => navigate(`/articles/${article.slug}`)}
          >
            <div className="article-preview-left">
              <div className="article-cover-emoji">{article.coverEmoji}</div>
            </div>
            <div className="article-preview-body">
              <div className="article-preview-tags">
                {article.tags.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    className="article-tag"
                    title={`Show all articles tagged ${tag}`}
                    onClick={(e) => {
                      // Don't open the article — filter the list by this tag.
                      e.stopPropagation();
                      setSelectedTag(tag);
                      setSearchQuery('');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <h2 className="article-preview-title">{article.title}</h2>
              <p className="article-preview-subtitle">{article.subtitle}</p>
              <div className="article-preview-meta">
                <span className="article-preview-date">{article.date}</span>
                <span className="article-preview-dot">·</span>
                <span className="article-preview-read-time">{article.readTime}</span>
              </div>
            </div>
          </article>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <nav className="articles-pagination" aria-label="Articles pages">
          <button
            className="articles-page-btn"
            onClick={() => goToPage(safePage - 1)}
            disabled={safePage === 1}
          >
            ← Prev
          </button>
          {pageNumbers.map((n, i) =>
            n === '…' ? (
              <span key={`ellipsis-${i}`} className="articles-page-ellipsis">…</span>
            ) : (
              <button
                key={n}
                className={`articles-page-btn${n === safePage ? ' active' : ''}`}
                onClick={() => goToPage(n)}
                aria-current={n === safePage ? 'page' : undefined}
              >
                {n}
              </button>
            ),
          )}
          <button
            className="articles-page-btn"
            onClick={() => goToPage(safePage + 1)}
            disabled={safePage === totalPages}
          >
            Next →
          </button>
        </nav>
      )}
    </div>
  );
};

export default ArticlesList;
