import React from 'react';
import logo from '../assets/mait.png'; // Adjusted import path

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0C1B39', // Set the footer background color
      color: 'whitesmoke', // Change text color to whitesmoke
      padding: '20px',
      display: 'flex',
      justifyContent: 'center', // Center everything in the footer
      alignItems: 'center',
      flexDirection: 'column', // Stack items vertically
    }}>
      {/* Navigation Links */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        gap: '15px',
        margin: '0 0 10px 0', // Margin below the nav for spacing
      }}>
        <li>
          <a href="#" style={{ color: 'whitesmoke', textDecoration: 'none', transition: 'color 0.3s' }}>Home</a>
        </li>
        <li>
          <a href="#" style={{ color: 'whitesmoke', textDecoration: 'none', transition: 'color 0.3s' }}>Features</a>
        </li>
        <li>
          <a href="#" style={{ color: 'whitesmoke', textDecoration: 'none', transition: 'color 0.3s' }}>Pricing</a>
        </li>
        <li>
          <a href="#" style={{ color: 'whitesmoke', textDecoration: 'none', transition: 'color 0.3s' }}>FAQs</a>
        </li>
        <li>
          <a href="#" style={{ color: 'whitesmoke', textDecoration: 'none', transition: 'color 0.3s' }}>About</a>
        </li>
      </ul>

      {/* Logo placed directly below navigation */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '100px', // Increased width for visibility
          height: 'auto', // Maintain aspect ratio
          margin: '0',
          objectFit:"cover" // Remove any margins
        }}
      />

      <p style={{
        textAlign: 'center',
        margin: '5px 0 0 0', // Minimal margin above for spacing
        paddingTop: '10px',
      }}>
        © EduLogix,Cp0
      </p>
    </footer>
  );
};

export default Footer;
