// src/components/Navbar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  Tooltip
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';  // Attendance Icon
import GroupWorkIcon from '@mui/icons-material/GroupWork';  // Collab Icon
import SettingsIcon from '@mui/icons-material/Settings';  // Settings Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0c1b39', boxShadow: 'none', marginTop: '16px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Left Section - Logo and Name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '40px', marginRight: '10px', color: 'white' }} />
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            EduLogix
          </Typography>
        </Box>

        {/* Right Section - Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Menu Icons with Tooltips */}
          <Tooltip title="Home">
            <IconButton color="inherit" component={Link} to="/">
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Dashboard">
            <IconButton color="inherit" component={Link} to="/dashboard">
              <DashboardIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Attendance">
            <IconButton color="inherit" component={Link} to="/comingsoon"> {/* Navigate to Coming Soon */}
              <EventIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Collaboration">
            <IconButton color="inherit" component={Link} to="/comingsoon"> {/* Navigate to Coming Soon */}
              <GroupWorkIcon />
            </IconButton>
          </Tooltip>

          {/* Settings with Hover Menu */}
          <Tooltip title="Settings">
            <IconButton color="inherit" onClick={handleMenuClick}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {/* Menu for Sign In and Sign Up */}
            <MenuItem onClick={handleMenuClose}>
              <Button variant="outlined" color="inherit" component={Link} to="/signin">
                Sign In
              </Button>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Button variant="outlined" color="inherit" component={Link} to="/signup">
                Sign Up
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
