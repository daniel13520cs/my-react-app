import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import the necessary components
import NavBar from '../components/NavBar';
import { Panel } from 'rsuite';
import React, { useEffect, useState } from 'react';
import {apiURL} from '../constants';
import { useUser } from '../context/userContext';

function Home() {
  const { currentUser, logoutUser } = useUser();
  return (
    <div>
    <NavBar></NavBar>
    <Panel header="User Data">
      <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.username}!</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <p>User not logged in.</p>
      )}
    </div>
    </Panel>
    </div>
  );
}

export default Home;
