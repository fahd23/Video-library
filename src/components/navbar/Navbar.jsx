import React from "react";
import "./navbar.css";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
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
      <div className="search-bar-div">
        <BiSearch />
        <input
          type="text"
          className="search-bar"
          placeholder="Search for Videos"
        />
      </div>

      <div className="profile-icon">
        <CgProfile />
      </div>
    </div>
  );
}
