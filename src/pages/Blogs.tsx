import React from 'react';
import './Blogs.css';
import { FaMedium, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

const articles = [
  {
    title: "Spotify Data Visualization",
    description: "Analyzing music trends and user behavior through data visualization techniques. Exploring streaming patterns and genre preferences.",
    link: "https://medium.com/@shrunalisalian97/spotify-data-visualization-4c878c8114e",
    views: "15,000",
    category: "Data Science"
  },
  {
    title: "Perception in Motion: The Science Behind Autonomous Vehicle Vision",
    description: "Deep dive into Waymo research papers exploring computer vision systems for autonomous vehicles. Understanding how AI perceives and navigates the world.",
    link: "https://medium.com/@shrunalisalian97/perception-in-motion-the-science-behind-autonomous-vehicle-vision-07f68a263263",
    views: "Research Analysis",
    category: "Computer Vision"
  },
  {
    title: "Emma: The AI That Drives and Thinks Like Us",
    description: "Exploring advanced AI systems that combine autonomous driving with human-like reasoning. A look at the future of intelligent transportation.",
    link: "https://medium.com/@shrunalisalian97/emma-the-ai-that-drives-and-thinks-like-us-840094d2b900",
    views: "AI Innovation",
    category: "AI Systems"
  }
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">Explore my thoughts on AI/ML, software engineering, and technology through my Medium articles.</p>
      
      <div className="articles-grid">
        {articles.map((article, index) => (
          <a 
            href={article.link} 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="article-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="article-header">
              <div className="article-icon">
                <FaMedium />
              </div>
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
                <div className="article-views">
                  <FaEye className="views-icon" />
                  <span>{article.views}</span>
                </div>
              </div>
            </div>
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
            </div>
            <div className="article-link">
              <FaExternalLinkAlt className="link-icon" />
              <span>Read on Medium</span>
            </div>
          </a>
        ))}
      </div>
      
      <div className="medium-profile-card">
        <div className="medium-header">
          <div className="medium-icon">
            <FaMedium />
          </div>
          <div className="medium-info">
            <h3>Medium Profile</h3>
            <p>@shrunalisalian97</p>
          </div>
        </div>
        
        <div className="medium-description">
          <p>I write about machine learning, AI systems, software engineering practices, and my experiences building intelligent technology. My articles cover topics ranging from deep learning implementations to production ML systems.</p>
        </div>
        
        <a 
          href="https://medium.com/@shrunalisalian97" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="medium-link"
        >
          <FaExternalLinkAlt className="link-icon" />
          Visit My Medium Profile
        </a>
      </div>
      
      <div className="blog-topics">
        <h3>Topics I Write About:</h3>
        <div className="topics-grid">
          <div className="topic-tag">🤖 Machine Learning</div>
          <div className="topic-tag">🧠 Deep Learning</div>
          <div className="topic-tag">👁️ Computer Vision</div>
          <div className="topic-tag">🔧 Software Engineering</div>
          <div className="topic-tag">⚡ AI Systems</div>
          <div className="topic-tag">📊 Data Science</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
