import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import "App.css";
import "./playlistModal.css";

const PlaylistInputForm = ({ createPlaylistHandler }) => {
  const [name, setName] = useState("");
  const addClickHandler = () => {
    if (name) createPlaylistHandler(name);
    setName("");
  };
  return (
    <div className="playlist-modal">
      <label htmlFor="playlist-input">Create new playlist</label>
      <input
        id="playlist-input"
        type="text"
        className="playlist-input"
        autoFocus={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex-a-c">
        <BiPlus size="20px" className="pointer" onClick={addClickHandler} />
      </div>
    </div>
  );
};

export default PlaylistInputForm;
