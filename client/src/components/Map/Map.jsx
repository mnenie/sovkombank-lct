import React, { useState } from "react";
import ReactMapGl, {GeolocateControl, FullscreenControl, NavigationControl} from "react-map-gl";
const Map = () => {
  return (
    <ReactMapGl
      mapboxAccessToken="pk.eyJ1Ijoic3Rhc25vcm1hbiIsImEiOiJjbG9vNmhyengzNGN3MmtwbDlqYXA3ZnVpIn0.uHloBMG-PmI89AZi3ICtwA"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <GeolocateControl />
      <NavigationControl/>
      <FullscreenControl />
    </ReactMapGl>
  );
};

export default Map;
