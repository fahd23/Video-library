import React from "react";
import "./videocard.css";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";

export function Videocard({ video }) {
  return (
    <Link to={`/video/${video._id}`}>
      <div className="video-card">
        <img
          className="video-banner"
          src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
          alt="video-card-img"
        />
        <div>
          <div className="card-header">
            <h1 className="video-title">{video.title}</h1>
            <FaEllipsisV />
          </div>
          <div className="video-card-footer">
            <p>{video.creator}</p>
            <p>{video.uploaded}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
