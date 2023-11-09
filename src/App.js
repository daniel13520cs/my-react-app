import React from 'react';
import { BrowserRouter as Router, Route, useParams, Routes } from 'react-router-dom'; // Import the necessary components

import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Product from './pages/product';
import ShoppingCart from './components/shoppingCart';

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
          <Route path="/shoppingCart" element={<ShoppingCart></ShoppingCart>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
