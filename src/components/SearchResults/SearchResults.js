import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";
const SearchResults = () => {
  return (
    <div>
      <div className="SearchResults">
        <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <TrackList />
      </div>
    </div>
  );
};
export default SearchResults;
