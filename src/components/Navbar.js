import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import myDomot from "../assets/myDomotLogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={myDomot} alt="myDomot" className="logo" />
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/aboutus" className="nav-link">
          About Us
        </Link>
        <Link to="/login" className="nav-link nav-btn">
          Login/SignUp
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
