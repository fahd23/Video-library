import React from "react";
import ReactPlayer from "react-player";
import "./singlevideo.css";
import { videos } from "backend/db/videos";
import { BiLike } from "react-icons/bi";
import { FaClock } from "react-icons/fa";

const SingleVideo = ({ id }) => {
  const video = videos.find((video) => video._id === id);
  return (
    <div className="player-wrapper" key={video._id}>
      <ReactPlayer
        width="100%"
        className="react-player"
        url={`https://www.youtube.com/watch?v=${video._id}`}
        controls={true}
      />
      <div>
        <h2 className="p-top-1">{video.title}</h2>
        <p className="p-top-5px f-w-500">{video.creator}</p>
        <div className="icons-container">
          <span className="chips">
            <BiLike /> Like
          </span>
          <span className="chips">
            <FaClock /> Watch Later
          </span>
        </div>
        <hr />
        <p className="p-top-1 f-w-bold">Description:</p>
        <p className="p-top-1">{video.description}</p>
      </div>
    </div>
  );
};

export default SingleVideo;
