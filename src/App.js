import React from 'react';
import { BrowserRouter as Router, Route, useParams, Routes } from 'react-router-dom'; // Import the necessary components

import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Product from './pages/product'

function App() {

  return (
    <Router>
      <div className="App">
        {/* Define routes using the Routes component */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path={`/product/:id`} element={<Product description="not yet" />} />
          <Route path={`/product`} element={<Product description="not yet" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
