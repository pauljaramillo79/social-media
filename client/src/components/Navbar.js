import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
