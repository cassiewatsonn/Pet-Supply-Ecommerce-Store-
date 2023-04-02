import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function NavTabs() {
  const [isOpen, setIsOpen] = useState(false);
  //checking to see if signed in user has admin access
  var accessLvl = localStorage.getItem('accessLvl');
  //If Admin user is signed in, then they see the following navbar options 
  if (Auth.loggedIn()) {

    function UserControls() {
      console.log(accessLvl);
      if (accessLvl === 'true') {
        return (
          <Link to="/admin">
            Admin
          </Link>
        )
      } else {
        //If signed in user is not an Admin level, then they are displayed the following nav bar 
        return (
        <Link to="/settings">
          Settings
        </Link>
        )
      }
    }
    return (
      <div className="Navigation-bar">
        <span className="navs"></span>
        <div className={`nav-items ${isOpen && "open"}`}>

          <Link className='navv' to="/aboutus">
            About Us
          </Link>

          <Link className='navv' to="/products">
            Products
          </Link>

          <Link className='navv' to="/" onClick={() => Auth.logout()}>
            Logout
          </Link>

          <UserControls />

        </div>

        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    );
  } else {
    //Navbar to display when user is not logged in
    return (
      <div className="Navigation-bar">
        <span className="navs"></span>
        <div className={`nav-items ${isOpen && "open"}`}>

          <Link to="/aboutus">
            About Us
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/signin">
            Sign In
          </Link>

          <Link to="/signup">
            Sign Up
          </Link>

        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    );
  }
};
