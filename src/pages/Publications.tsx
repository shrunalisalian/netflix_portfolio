import React, { useEffect, useState } from 'react';
import './Publications.css';
import { FaExternalLinkAlt, FaUniversity, FaBook } from 'react-icons/fa';
import { SiIeee, SiGooglescholar } from 'react-icons/si';
import { Publication } from '../types';
import { getPublications } from '../queries/getPublications';

const iconData: { [key: string]: JSX.Element } = {
  'research': <FaBook />,
  'ieee': <SiIeee />,
  'scholar': <SiGooglescholar />,
  'university': <FaUniversity />
}

const Publications: React.FC = () => {

  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => { 
    async function fetchPublications() {
      const data = await getPublications();
      setPublications(data);
    }

    fetchPublications();
  }, []);

  if (publications.length === 0) return <div>Loading...</div>;

  return (
    <div className="publications-container">
      <div className="publications-grid">
        {publications.map((pub, index) => (
          <a href={pub.link} key={index} target="_blank" rel="noopener noreferrer" className="publication-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="publication-content">
              <div className="publication-icon">{iconData[pub.iconName] || <FaBook />}</div>
              <h3>{pub.title}</h3>
              <p className="authors">{pub.authors}</p>
              {pub.description && <p className="description">{pub.description}</p>}
              {pub.publishedDate && <span className="published-date">Published {pub.publishedDate}</span>}
            </div>
            <div className="publication-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Publications;
