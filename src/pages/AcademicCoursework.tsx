import React, { useEffect, useState } from 'react';
import './AcademicCoursework.css';
import { FaCode, FaBrain, FaDatabase, FaChartLine, FaRobot, FaEye, FaSearch, FaMicrochip, FaCogs, FaGraduationCap, FaUsers, FaNetworkWired, FaWaveSquare, FaServer, FaDesktop } from 'react-icons/fa';
import { AcademicCoursework } from '../types';
import { staticAcademicCoursework } from '../data/staticData';

const iconData: { [key: string]: JSX.Element } = {
  'code': <FaCode />,
  'algorithm': <FaCogs />,
  'engineering': <FaGraduationCap />,
  'ai': <FaBrain />,
  'ml': <FaRobot />,
  'database': <FaDatabase />,
  'nlp': <FaMicrochip />,
  'vision': <FaEye />,
  'mining': <FaSearch />,
  'datascience': <FaChartLine />,
  'db': <FaDatabase />,
  'interaction': <FaUsers />,
  'parallel': <FaNetworkWired />,
  'signal': <FaWaveSquare />,
  'distributed': <FaServer />,
  'os': <FaDesktop />
}

const AcademicCourseworkPage: React.FC = () => {
  const [coursework, setCoursework] = useState<AcademicCoursework[]>([]);

  useEffect(() => {
    setCoursework(staticAcademicCoursework);
  }, []);

  if (coursework.length === 0) return <div>Loading...</div>;

  return (
    <div className="academic-coursework-container">
      <div className="page-header">
        <h1>Academic Coursework</h1>
        <p>Comprehensive foundation in computer science, AI/ML, and software engineering</p>
      </div>
      
      <div className="coursework-section">
        <div className="coursework-grid">
          {coursework.map((course, index) => (
            <div key={index} className="coursework-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
              <div className="coursework-icon">
                {iconData[course.icon] || <FaGraduationCap />}
              </div>
              <div className="coursework-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicCourseworkPage;
