import React, { useState } from "react";
import "App.css";
import "./videocard.css";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaPlayCircle, FaClock } from "react-icons/fa";
import { useData } from "context/Data-context";

export function Videocard({ video }) {
  const [showList, setShowList] = useState(false);
  const {
    watchlaterState: { watchlater },
    watchlaterDispatch,
    historyDispatch,
    playlistState: { playlists },
    playlistDispatch,
  } = useData();

  return (
    <div
      className="video-card position-relative"
      onClick={() => {
        historyDispatch({
          type: "ADD_TO_HISTORY",
          payload: video,
        });
      }}
    >
      <Link to={`/video/${video._id}`}>
        <div className="position-relative">
          <img
            className="video-banner"
            src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
            alt="video-card-img"
          />
          <FaPlayCircle className="play-circle" />
        </div>
      </Link>
      <div>
        <div className="card-header">
          <h1 className="video-title">{video.title}</h1>
          <FaEllipsisV onClick={() => setShowList(!showList)} />
          <div
            className={`option-list ${
              showList ? "display-flex" : "display-none"
            }`}
          >
            <div
              onClick={() => {
                watchlaterDispatch({
                  type: "ADD_TO_WATCHLATER",
                  payload: video,
                });
              }}
            >
              <FaClock />
              {watchlater.find((item) => item._id === video._id)
                ? "Remove from Watch Later"
                : "Add to Watch Later"}
            </div>
            <div
              onClick={() =>
                playlistDispatch({
                  type: "ADD_TO_PLAYLIST",
                  payload: video,
                })
              }
            >
              <FaPlayCircle />
              {playlists.find((item) => item._id === video._id)
                ? "Remove from Playlist"
                : "Add to Playlist"}
            </div>
          </div>
        </div>
        <div className="video-card-footer">
          <p>{video.creator}</p>
          <p>{video.uploaded}</p>
        </div>
      </div>
    </div>
  );
}
