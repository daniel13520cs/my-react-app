import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import the necessary components
import NavBar from './NavBar';
import { Panel } from 'rsuite';
import React, { useEffect, useState } from 'react';

function UserComponent() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Replace the URL with the actual URL of your API
    const apiUrl = '/User';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return userData;
}

function Home() {
  var userData = UserComponent();
  return (
    <div>
    <NavBar></NavBar>
    <Panel header="User Data">
      <div>Session ID: {userData}</div>
    </Panel>
    </div>
  );
}

export default Home;
