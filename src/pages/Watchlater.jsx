import "App.css";
import React from "react";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import { useData } from "context/Data-context";
import { Videocard } from "components/videolisting/Videocard";
const Watchlater = () => {
  const {
    watchlaterState: { watchlater },
  } = useData();
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <div className="video-listing-header">
          <h2 className="page-heading">
            Watch Later
            {watchlater.length !== 0
              ? ` (${watchlater.length} ${
                  watchlater.length === 1 ? "Video" : "Videos"
                })`
              : ""}
          </h2>
          {watchlater.length === 0 ? (
            <p className="alert-message">
              Looks like you haven't added anything yet in Watch Later.
            </p>
          ) : (
            <div className="video-listing">
              {watchlater.map((video) => {
                return <Videocard video={video} key={video._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Watchlater;
