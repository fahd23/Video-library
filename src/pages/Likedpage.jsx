import "App.css";
import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import React from "react";
import { useData } from "context/Data-context";
import { Videocard } from "components/videolisting/Videocard";

const Likedpage = () => {
  const {
    likeState: { like },
  } = useData();
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <div className="video-listing-header">
          <h2>Like</h2>
          <div className="video-listing">
            {like.map((video) => {
              return <Videocard video={video} key={video._id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Likedpage;
