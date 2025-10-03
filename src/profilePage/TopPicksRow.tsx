import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaBookOpen, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'engineer' | 'innovator' | 'explorer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=250&h=200&fit=crop", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=250&h=200&fit=crop", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Skills", imgSrc: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=250&h=200&fit=crop", icon: <FaCode />, route: "/skills" },
    { title: "Publications", imgSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=200&fit=crop", icon: <FaBookOpen />, route: "/publications" }
  ],
  engineer: [
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=250&h=200&fit=crop", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=250&h=200&fit=crop", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=250&h=200&fit=crop", route: "/skills", icon: <FaCode /> },
    { title: "Publications", imgSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=200&fit=crop", route: "/publications", icon: <FaBookOpen /> }
  ],
  innovator: [
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=250&h=200&fit=crop", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=250&h=200&fit=crop", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=250&h=200&fit=crop", route: "/skills", icon: <FaCode /> },
    { title: "Publications", imgSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=200&fit=crop", route: "/publications", icon: <FaBookOpen /> },
  ],
  explorer: [
    { title: "Experience", imgSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=250&h=200&fit=crop", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Projects", imgSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=250&h=200&fit=crop", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=250&h=200&fit=crop", route: "/skills", icon: <FaCode /> },
    { title: "Publications", imgSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=250&h=200&fit=crop", route: "/publications", icon: <FaBookOpen /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile.charAt(0).toUpperCase() + profile.slice(1)}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
