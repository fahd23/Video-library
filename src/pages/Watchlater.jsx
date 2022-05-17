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
    <div>
      <Navbar />
      <Sidebar />
      <div className="video-listing-header">
        <h2>Watch Later</h2>
        <div className="video-listing">
          {watchlater.map((video) => {
            return <Videocard video={video} key={video._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Watchlater;
