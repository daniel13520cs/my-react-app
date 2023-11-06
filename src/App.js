import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import the necessary components

import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes using the Routes component */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
