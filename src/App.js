import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import the necessary components

import Dashboard from './Dashboard';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes using the Routes component */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<NavBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
