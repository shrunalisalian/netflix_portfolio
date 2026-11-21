import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { articles } from './articlesData';
import './ArticlesList.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

const ArticlesList: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.subtitle.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

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
              placeholder="Search by title, topic, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        <div className="articles-count">
          {filteredArticles.length} of {articles.length} article{filteredArticles.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className="articles-feed">
        {filteredArticles.length === 0 ? (
          <div className="articles-no-results">
            <p>No articles found matching "{searchQuery}"</p>
            <button onClick={() => setSearchQuery('')} className="articles-reset-btn">
              Clear search
            </button>
          </div>
        ) : (
          filteredArticles.map((article, index) => (
          <article
            key={article.slug}
            className="article-preview-card"
            onClick={() => navigate(`/articles/${article.slug}`)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="article-preview-left">
              <div className="article-cover-emoji">{article.coverEmoji}</div>
            </div>
            <div className="article-preview-body">
              <div className="article-preview-tags">
                {article.tags.map(tag => (
                  <span key={tag} className="article-tag">{tag}</span>
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
    </div>
  );
};

export default ArticlesList;
