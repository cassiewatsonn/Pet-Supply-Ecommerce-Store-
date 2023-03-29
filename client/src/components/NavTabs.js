import React from 'react';
import { Link } from "react-router-dom";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <Link to="/AboutUs">
              AboutUs
            </Link>
      </li>
      <li className="nav-item">
      <Link to="/Toys">
              Toys
            </Link>
      </li>
      <li className="nav-item">
      <Link to="/Treats">
              Treats
            </Link>
      </li>
      <li className="nav-item">
      <Link to="/Cart">
              Cart
            </Link>
      </li>

      <button>
      <Link to="/SignIn">
              SignIn
            </Link>
      </button>

      <button>
      <Link to="/SignUp">
              SignUp
            </Link>
      </button>
    </ul>
  );
}