import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div className="profile-pic-placeholder">
            <span>RK</span>
          </div>
          <div>
            <h3>Rami Khoury</h3>
            <p>Building auxi. AI for PowerPoint</p>
            <p className="date">September 5, 2023</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "Have the pleasure of working alongside Shrunali at auxi, where she significantly contributes to our machine learning projects and leads several research-oriented tasks. Her deep understanding of ML algorithms coupled with her relentless drive makes her an invaluable asset to our team."</p>
          <p>🚀 "Shrunali's innovative approaches not only helped in advancing several auxi projects but also added depth to our research initiatives. We are fortunate to have her on our team."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
