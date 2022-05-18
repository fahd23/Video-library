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
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <div className="video-listing-header">
          <h2 className="page-heading">
            Like{" "}
            {like.length !== 0
              ? `(${like.length} ${like.length === 1 ? "Video" : "Videos"})`
              : ""}
          </h2>
          {like.length === 0 ? (
            <p className="alert-message">
              Looks like you haven't liked anything yet.
            </p>
          ) : (
            <div className="video-listing">
              {like.map((video) => {
                return <Videocard video={video} key={video._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Likedpage;
