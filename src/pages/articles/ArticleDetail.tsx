import React, { useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { articles, ContentBlock } from './articlesData';
import './ArticleDetail.css';

// Highlight a search query inside article text. The query's words are
// joined with "any non-letter separator", so "fine tuning" also matches
// "fine-tuning" in the text — which is how the articles are actually
// written, and why a literal Ctrl+F for "fine tuning" finds nothing.
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightText = (text: string, query: string) => {
  const words = query
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);
  if (words.length === 0) return text;
  const pattern = words.map(escapeRegExp).join('[^a-z0-9]+');
  return text.replace(new RegExp(`(${pattern})`, 'gi'), '<mark class="search-highlight">$1</mark>');
};

const formatInline = (text: string, query: string) => {
  const highlighted = query ? highlightText(text, query) : text;
  return highlighted
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\\n]+?)\*/g, '<em>$1</em>');
};

const renderBlock = (block: ContentBlock, idx: number, query: string): React.ReactNode => {
  switch (block.type) {
    case 'h2':
      return <h2 key={idx} className="article-h2">{block.text}</h2>;
    case 'h3':
      return <h3 key={idx} className="article-h3">{block.text}</h3>;
    case 'paragraph':
      return (
        <p
          key={idx}
          className="article-paragraph"
          dangerouslySetInnerHTML={{ __html: formatInline(block.text, query) }}
        />
      );
    case 'code':
      return (
        <div key={idx} className="article-code-block">
          <div className="code-lang-label">{block.language}</div>
          <pre><code>{block.code}</code></pre>
        </div>
      );
    case 'quote':
      return (
        <blockquote key={idx} className="article-blockquote">
          <p dangerouslySetInnerHTML={{ __html: formatInline(block.text, query) }} />
          {block.author && <cite>— {block.author}</cite>}
        </blockquote>
      );
    case 'list': {
      const fmt = (s: string) => formatInline(s, query);
      return block.ordered ? (
        <ol key={idx} className="article-list">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: fmt(item) }} />
          ))}
        </ol>
      ) : (
        <ul key={idx} className="article-list">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: fmt(item) }} />
          ))}
        </ul>
      );
    }
    case 'divider':
      return <div key={idx} className="article-divider"><span>✦</span><span>✦</span><span>✦</span></div>;
    case 'callout':
      return (
        <div key={idx} className="article-callout">
          <span className="callout-emoji">{block.emoji}</span>
          <p dangerouslySetInnerHTML={{ __html: formatInline(block.text, query) }} />
        </div>
      );
    case 'math':
      return (
        <div key={idx} className="article-math">
          <code>{block.text}</code>
        </div>
      );
    default:
      return null;
  }
};

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') ?? '';
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // When opened from a search, jump to the first highlighted match.
  useEffect(() => {
    if (!searchQuery) return;
    const el = document.querySelector('.search-highlight');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [slug, searchQuery]);

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article not found</h2>
        <button onClick={() => navigate('/articles')}>← Back to Articles</button>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <div className="article-detail-inner">
        <button className="article-back-btn" onClick={() => navigate('/articles')}>
          ← All Articles
        </button>

        <header className="article-detail-header">
          <div className="article-detail-tags">
            {article.tags.map(tag => (
              <span key={tag} className="article-detail-tag">{tag}</span>
            ))}
          </div>

          <div className="article-detail-cover-emoji">{article.coverEmoji}</div>

          <h1 className="article-detail-title">{article.title}</h1>
          <p className="article-detail-subtitle">{article.subtitle}</p>

          <div className="article-detail-meta">
            <div className="article-author-badge">
              <div className="author-avatar">SS</div>
              <div className="author-info">
                <span className="author-name">Shrunali Salian</span>
                <span className="author-role">ML Engineer</span>
              </div>
            </div>
            <div className="article-meta-right">
              <span>{article.date}</span>
              <span className="meta-dot">·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {searchQuery && (
          <div className="article-search-match">
            Matched &ldquo;{searchQuery}&rdquo; — highlighted in this article.
          </div>
        )}

        <div className="article-divider-line" />

        <div className="article-body">
          {article.content.map((block, idx) => renderBlock(block, idx, searchQuery))}
        </div>

        <footer className="article-detail-footer">
          <div className="article-footer-tags">
            {article.tags.map(tag => (
              <span key={tag} className="article-footer-tag">{tag}</span>
            ))}
          </div>
          <button className="article-back-btn-footer" onClick={() => navigate('/articles')}>
            ← Back to all articles
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ArticleDetail;
