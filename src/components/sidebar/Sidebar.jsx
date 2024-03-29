import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaPlayCircle,
  FaHeart,
  FaClock,
  FaHistory,
} from "react-icons/fa";
import { useData } from "context/Data-context";

export default function Sidebar() {
  const { sidebar } = useData();
  const getActiveLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "var(--grey)" : "",
    width: isActive ? "100%" : "",
  });
  return (
    <div className={`sidebar ${sidebar ? "trans-on" : "trans-off"}`}>
      <NavLink to="/" className="sidebar-icon" style={getActiveLinkStyle}>
        <FaHome className="icons" /> Home
      </NavLink>
      <NavLink to="/liked" className="sidebar-icon" style={getActiveLinkStyle}>
        <FaHeart className="icons" /> Liked
      </NavLink>
      <NavLink
        to="/watchlater"
        className="sidebar-icon"
        style={getActiveLinkStyle}
      >
        <FaClock className="icons" /> Watch Later
      </NavLink>
      <NavLink
        to="/history"
        className="sidebar-icon"
        style={getActiveLinkStyle}
      >
        <FaHistory className="icons" /> History
      </NavLink>
    </div>
  );
}
