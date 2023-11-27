import React from 'react';
import { BrowserRouter as Router, Route, useParams, Routes } from 'react-router-dom'; // Import the necessary components

import Dashboard from './Dashboard';
import Home from './pages/Home';
import Login from './Login';
import Product from './pages/product';
import ShoppingCart from './components/shoppingCart';
import AllUsers from './pages/allUsers';
import AllUsersActivities from './pages/allUsersActivities';

function App() {
  return (
    <Router basename="/my-react-app">
      <div className="App">
        {/* Define routes using the Routes component */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path={`/product/:id`} element={<Product description="not yet" />} />
          <Route path={`/product`} element={<Product description="not yet" />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/allUsersActivities" element={<AllUsersActivities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
