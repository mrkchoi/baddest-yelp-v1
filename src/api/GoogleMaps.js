// API KEY: AIzaSyDBB4V-Pd8B1Oi_glxkU5EuoL3R9hEUqg8
import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

const mapStyles = {
  width: "100vw",
  height: "100vh"
};

// Initialize and add the map
export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        defaultCenter={{
          lat: 37.774929,
          lng: -122.419416
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDBB4V-Pd8B1Oi_glxkU5EuoL3R9hEUqg8"
})(MapContainer);
