import React from "react";
import "./navbar.css";
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1649755954/images-removebg-preview_6_mcmvzs.png"
          alt="CricStream Logo"
          className="logo"
        />
        <h1 className="logo-name">CricStream</h1>
      </div>
      <div className="profile-icon">
        <CgProfile />
      </div>
    </div>
  );
}
