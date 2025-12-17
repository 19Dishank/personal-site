import React from 'react';
import './HeroSection.css';

const HeroSection = ({ 
  name = "Your Name",
  nameComponent,
  subtitle = "Web Developer | Creative Thinker",
  subtitleComponent,
  description = "Welcome to my personal space",
  photoSrc = "/profile-photo.jpg"
}) => {
  return (
    <div className="hero-section">
      <div className="hero-photo-container">
        <img 
          src={photoSrc} 
          alt="Profile" 
          className="hero-photo"
          onError={(e) => {
            // Fallback to a placeholder if image doesn't exist
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hero-photo-placeholder" style={{display: 'none'}}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="rgba(99, 102, 241, 0.2)"/>
            <circle cx="100" cy="80" r="30" fill="rgba(99, 102, 241, 0.4)"/>
            <path d="M40 160 Q40 140 100 140 Q160 140 160 160 L160 200 L40 200 Z" fill="rgba(99, 102, 241, 0.4)"/>
          </svg>
        </div>
      </div>
      <h1 className="hero-name">
        {nameComponent || name}
      </h1>
      <p className="hero-subtitle">
        {subtitleComponent || subtitle}
      </p>
      <div className="hero-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;

