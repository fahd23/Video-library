import React from "react";
import ReactPlayer from "react-player";
import "./singlevideo.css";
import { videos } from "backend/db/videos";
import { BiLike } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { useData } from "context/Data-context";

const SingleVideo = ({ id }) => {
  const { likeDispatch, watchlaterDispatch } = useData();
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
          <span
            className="chips"
            onClick={() => {
              likeDispatch({
                type: "ADD_TO_LIKE",
                payload: video,
              });
            }}
          >
            <BiLike /> Like
          </span>
          <span
            className="chips"
            onClick={() => {
              watchlaterDispatch({
                type: "ADD_TO_WATCHLATER",
                payload: video,
              });
            }}
          >
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
