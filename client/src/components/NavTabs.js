import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavTabs() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navigation-bar">
      <span className="navs"></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        
          <Link to="/AboutUs">
            About Us
          </Link>
        
          <Link to="/Products">
            Products
          </Link>
        

          <Link to="/SignIn">
            Sign In
          </Link>
       

          <Link to="/SignUp">
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
};





// return (

// <ul className="nav nav-tabs">

//   <div className="nav-item">
//     <Link to="/AboutUs">
//       About Us
//     </Link>
//   </div>

//   <div className="nav-item">
//     <Link to="/Toys">
//       Toys
//     </Link>
//   </div>

//   <div className="nav-item">
//     <Link to="/Toys">
//       Toys
//     </Link>
//   </div>

//   <div className="nav-item">
//     <Link to="/Cart">
//       Cart
//     </Link>
//   </div>

//   <button className='signin-btn'>
//     <Link to="/SignIn">
//       SignIn
//     </Link>
//   </button>

//   <button className='signup-btn'>
//     <Link to="/SignUp">
//       SignUp
//     </Link>
//   </button>

// </ul>
// )
// }
