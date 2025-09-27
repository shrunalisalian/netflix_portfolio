import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/title.png'; // Update with the path to your logo

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); // Starts animation after clicking
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      {/*
      <img 
        src={logoImage} 
        alt="Shrunali Salian Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      /> */}
      <h1 className={`netflix-logo ${isClicked ? 'animate' : ''}`}>
      SHRUNALI SALIAN
      </h1>
    </div>
  );
};

export default NetflixTitle;
