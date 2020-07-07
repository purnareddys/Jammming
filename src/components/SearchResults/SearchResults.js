import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";
const SearchResults = (props) => {
  return (
    <div>
      <div className="SearchResults">
        <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <TrackList searchResults={props.searchResults} />
      </div>
    </div>
  );
};
export default SearchResults;
