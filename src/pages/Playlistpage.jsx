import Navbar from "components/navbar/Navbar";
import Sidebar from "components/sidebar/Sidebar";
import React from "react";
import { useData } from "context/Data-context";
import { Videocard } from "components/videolisting/Videocard";

const Playlistpage = () => {
  const {
    playlistState: { playlists },
  } = useData();
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <Sidebar />
        <div className="video-listing-header">
          <h2 className="page-heading">
            Your Playlist{" "}
            {playlists.length !== 0
              ? `(${playlists.length} ${
                  playlists.length === 1 ? "Video" : "Videos"
                })`
              : ""}
          </h2>
          {playlists.length === 0 ? (
            <p className="alert-message">
              Looks playlists you haven't create playlist.
            </p>
          ) : (
            <div className="video-listing">
              {playlists.map((video) => {
                return <Videocard video={video} key={video._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Playlistpage;
