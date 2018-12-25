// API KEY: AIzaSyDBB4V-Pd8B1Oi_glxkU5EuoL3R9hEUqg8
import React from "react";
import FoodieMap from "../api/GoogleMaps";

// Initialize and add the map
class FoodieMapContainer extends React.Component {
  render() {
    return (
      <FoodieMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDBB4V-Pd8B1Oi_glxkU5EuoL3R9hEUqg8&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `22rem`, width: `25rem` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default FoodieMapContainer;
