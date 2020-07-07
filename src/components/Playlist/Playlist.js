import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
const Playlist = () => {
  return (
    <div>
      <div className="Playlist">
        <input value="New Playlist" />
        {/* <!-- Add a TrackList component --> */}
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    </div>
  );
};
export default Playlist;
