import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'engineer' | 'innovator' | 'explorer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop", link: "/work-permit" },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop", link: "/recommendations" },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop", link: "/contact-me" },
    { title: "LeetCode", imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop", link: "https://leetcode.com/u/shrunali18/", external: true }
  ],
  engineer: [
    { title: "Work Permit", imgSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop", link: "/work-permit" },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop", link: "/recommendations" },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop", link: "/contact-me" },
    { title: "LeetCode", imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop", link: "https://leetcode.com/u/shrunali18/", external: true }
  ],
  innovator: [
    { title: "Work Permit", imgSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop", link: "/work-permit" },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop", link: "/recommendations" },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop", link: "/contact-me" },
    { title: "LeetCode", imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop", link: "https://leetcode.com/u/shrunali18/", external: true }
  ],
  explorer: [
    { title: "Work Permit", imgSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop", link: "/work-permit" },
    { title: "Recommendations", imgSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop", link: "/recommendations" },
    { title: "Blogs", imgSrc: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop", link: "/contact-me" },
    { title: "LeetCode", imgSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop", link: "https://leetcode.com/u/shrunali18/", external: true }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile.charAt(0).toUpperCase() + profile.slice(1)}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          pick.external ? (
            <a href={pick.link} key={index} className="pick-card" target="_blank" rel="noopener noreferrer">
              <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>
            </a>
          ) : (
            <Link to={pick.link} key={index} className="pick-card">
              <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
