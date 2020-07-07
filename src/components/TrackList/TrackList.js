import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";
const TrackList = ({ tracks }) => {
  return (
    <div>
      <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {tracks.map((track, index) => (
          <Track key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};
export default TrackList;
