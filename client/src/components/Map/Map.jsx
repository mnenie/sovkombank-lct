import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXlhYW56YXZlcmkiLCJhIjoiY2ttZHVwazJvMm95YzJvcXM3ZTdta21rZSJ9.WMpQsXd5ur2gP8kFjpBo8g';

const App = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.985664, 40.748514],
      zoom: 12,
    });
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
    map.addControl(directions, 'top-left');
  });
  return <div ref={(el) => (this.mapWrapper = el)} className="mapWrapper" />;
};
export default App;
