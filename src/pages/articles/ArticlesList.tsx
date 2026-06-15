import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articles } from './articlesData';
import './ArticlesList.css';

const ArticlesList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="articles-list-container">
      <div className="articles-list-header">
        <h1 className="articles-list-title">Real ML Interview Questions</h1>
        <p className="articles-list-subtitle">
          Real questions from ML interviews at top AI companies — answered in depth, with intuition first and jargon second.
        </p>
        <div className="articles-count">{articles.length} article{articles.length !== 1 ? 's' : ''}</div>
      </div>

      <div className="articles-feed">
        {articles.map((article, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
