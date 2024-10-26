// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; // Importing CSS styles
import Navbar from './components/Navbar'; // Navbar component
import SignUp from './components/SignUp'; // Importing SignUp component
import SignIn from './components/SignIn'; // Importing SignIn component
import Footer from './components/Footer'; // Importing Footer component
import Dashboard from './components/Dashboard'; // Importing Dashboard component
import Home from './components/Home'; // Importing Home component
import ComingSoon from './components/ComingSoon'; // Importing Coming Soon component

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

const Main = () => {
  const location = useLocation();

  return (
    <>
      {/* Render Navbar only for certain routes */}
      {location.pathname !== '/dashboard' && <Navbar />}

      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add Home route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/comingsoon" element={<ComingSoon />} /> {/* Add Coming Soon route */}
          {/* Add other routes here as needed */}
        </Routes>
      </div>
      
      {/* Render Footer only for certain routes */}
      {location.pathname !== '/dashboard' && <Footer />} 
    </>
  );
}

export default App;
