// src/components/ComingSoon.jsx
import React from 'react';
import './ComingSoon.css'; // Import CSS file for styling
import comingSoonImage from '../assets/coomingsoon.jpg'; // Adjust path if necessary

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1>Coming Soon!</h1>
        <p>We are working hard to bring . Stay tuned!</p>
        <img
          src={comingSoonImage} // Use the imported image
          alt="Placeholder"
          className="coming-soon-image"
        />
        <p>"During this time, you can engage with us on social media or explore additional sections of the website.".</p>
      </div>
    </div>
  );
};

export default ComingSoon;
