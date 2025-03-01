import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Styles for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h2>MyApp</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
