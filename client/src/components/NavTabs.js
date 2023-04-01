import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function NavTabs() {
  const [isOpen, setIsOpen] = useState(false);

//Navbar to display when user is logged in
  if (Auth.loggedIn()) {
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

          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
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

          <Link to="/cart">
            Cart

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
