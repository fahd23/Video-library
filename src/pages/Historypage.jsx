import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import React from "react";
import "App.css";
import { useData } from "context/Data-context";
import { Videocard } from "components/videolisting/Videocard";

const Historypage = () => {
  const {
    historyState: { history },
    historyDispatch,
  } = useData();
  let uniqueVideo = [...new Set(history)];
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <div className="video-listing-header">
          <h2 className="page-heading">
            History{" "}
            {uniqueVideo.length !== 0
              ? `(${uniqueVideo.length} ${
                  uniqueVideo.length === 1 ? "Video" : "Videos"
                })`
              : ""}
          </h2>

          {uniqueVideo.length !== 0 && (
            <button
              className="clear-history-btn"
              onClick={() => {
                historyDispatch({
                  type: "CLEAR",
                  payload: [],
                });
              }}
            >
              Clear History
            </button>
          )}

          {history.length === 0 ? (
            <p className="alert-message">
              Looks like you haven't watched anything yet.
            </p>
          ) : (
            <div className="video-listing">
              {uniqueVideo.reverse().map((video) => {
                return <Videocard video={video} key={video._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Historypage;
