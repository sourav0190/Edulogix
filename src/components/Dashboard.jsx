// src/components/Dashboard.jsx
import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (label) => {
    if (label === 'Student' || label === 'Faculty' || label === 'Institute Head') {
      navigate('/signup'); // Redirect to Signup page for Student, Faculty, or Institute Head
    } else {
      navigate('/comingsoon'); // Redirect to Coming Soon page for other cards
    }
  };

  return (
    <Box className="dashboard-container">
      {[
        { color: '#D7BDE2', label: 'Student' },
        { color: '#F7DC6F', label: 'Faculty' },
        { color: '#F5B041', label: 'Institute Head' },
        { color: '#5DADE2', label: 'Notification' },
        { color: '#E74C3C', label: 'Annual Report' },
        { color: '#85C1E9', label: 'Attendance' },
        { color: '#F7DC6F', label: 'Events' },
        { color: '#D1C4E9', label: 'Collaboration' }, // Adding Collaboration label
      ].map((item, index) => (
        <Box
          key={index}
          className="dashboard-card"
          style={{ backgroundColor: item.color }}
          onClick={() => handleCardClick(item.label)} // Added click handler for card
        >
          {item.label}
        </Box>
      ))}
    </Box>
  );
};

export default Dashboard;
