import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCPuZybfBxXGr - paLNDUrMmlnnSazkNV8I",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={37.070731} lng={37.350011} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
