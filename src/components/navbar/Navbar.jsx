import React, { useState } from "react";
import "./navbar.css";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useData } from "context/Data-context";

export default function Navbar() {
  const { setSidebar } = useData();
  return (
    <div className="navbar">
      <div className="nav-logo">
        <GiHamburgerMenu
          className="hamburger-icon"
          onClick={() => setSidebar((prev) => !prev)}
        />
        <img
          src="https://res.cloudinary.com/dgqwptcvp/image/upload/v1649755954/images-removebg-preview_6_mcmvzs.png"
          alt="CricStream Logo"
          className="logo"
        />
        <Link to="/" className="logo-name">
          CricStream
        </Link>
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
