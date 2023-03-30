import React from 'react';
import { Link } from "react-router-dom";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">

      <div className="nav-item">
        <Link to="/AboutUs">
          About Us
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/Toys">
          Toys
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/Treats">
          Treats
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/Cart">
          Cart
        </Link>
      </div>

      <button className='signin-btn'>
        <Link to="/SignIn">
          SignIn
        </Link>
      </button>

      <button className='signup-btn'>
        <Link to="/SignUp">
          SignUp
        </Link>
      </button>

    </ul>
  );
}