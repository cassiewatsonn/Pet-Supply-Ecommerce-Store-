import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function NavTabs() {
  const [isOpen, setIsOpen] = useState(false);
  const accessLvl = localStorage.getItem('accessLvl');

  if (Auth.loggedIn()) {
    function UserControls() {
      // console.log(accessLvl);
      if (accessLvl == true) {
        return (
          <Link to="/admin">
            Admin
          </Link>
        )
      } else {
        return (
        <Link to="/user">
          Settings
        </Link>
        )
      }
      
    }
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

          <Link to="/" onClick={() => Auth.logout()}>
            Logout
          </Link>

          <UserControls accessLvl = {accessLvl} />

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
