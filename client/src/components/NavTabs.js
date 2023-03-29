import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
        id="navs"
          href="#AboutUs"
          onClick={() => handlePageChange('AboutUs')}
          className= {currentPage === 'AboutUs' ? 'nav-link active' : 'nav-link'}
        >
          About Us
        </a>
      </li>
      <li className="nav-item">
        <a id="navs"
          href="#Toys"
          onClick={() => handlePageChange('Toys')}
          className={currentPage === 'Toys' ? 'nav-link active' : 'nav-link'}
        >
          Toys
        </a>
      </li>
      <li className="nav-item">
        <a
        id="navs"
          href="#Treats"
          onClick={() => handlePageChange('Treats')}
          className={currentPage === 'Treats' ? 'nav-link active' : 'nav-link'}
        >
          Treats
        </a>
      </li>
      <li className="nav-item">
        <a
        id="navs"
          href="#Cart"
          onClick={() => handlePageChange('Cart')}
          className={currentPage === 'Cart' ? 'nav-link active' : 'nav-link'}
        >
          Cart
        </a>
      </li>

      <button>
      <a
        id="navs"
          href="#SignIn"
          onClick={() => handlePageChange('SignIn')}
          className={currentPage === 'SignIn' ? 'nav-link active' : 'nav-link'}
        > 
        Sign In
        </a>
      </button>
    </ul>
  );
}