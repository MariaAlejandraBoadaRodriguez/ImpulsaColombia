import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Reports from './pages/Reports';
import Register_Login from './pages/Register_Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/Register_Login" element={<Register_Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage onLogin={() => setIsLoggedIn(true)} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
