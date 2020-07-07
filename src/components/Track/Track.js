import React from "react";
import "./Track.css";
class Track extends React.Component {
  constructor(props) {
    super();
  }
  renderAction = (isRemoval) => {
    if (isRemoval) {
      return <p>-</p>;
    } else {
      return <p>+</p>;
    }
  };
  render() {
    return (
      <div>
        <div className="Track">
          <div className="Track-information">
            {/* <h3><!-- track name will go here --></h3> */}
            {this.props.track.name}
            {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
            {this.props.track.artist}
            {this.props.track.album}
          </div>
          <button className="Track-action">
            {/* <!-- + or - will go here --> */}
          </button>
        </div>
      </div>
    );
  }
}
export default Track;
