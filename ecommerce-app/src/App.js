import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import NavbarUser from './Navbar-user'; // Import the Navbar component

const App = () => {
  // App component code goes here

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <NavbarUser />
      <Switch>
        {/* Your routes */}
      </Switch>
    </div>
  );
}

export default App;
