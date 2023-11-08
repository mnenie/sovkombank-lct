import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import { RulerControl, ImageControl } from "mapbox-gl-controls";
import "mapbox-gl-controls/lib/controls.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXlhYW56YXZlcmkiLCJhIjoiY2ttZHVwazJvMm95YzJvcXM3ZTdta21rZSJ9.WMpQsXd5ur2gP8kFjpBo8g";

export default function Map(coordinates) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(38.976);
  const [lat, setLat] = useState(45.0448);
  const [zoom, setZoom] = useState(12);

  function displayRouteOnMap(routeData) {
    const coordinates = routeData.routes[0].geometry.coordinates;
    
    map.current.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coordinates
          }
        }
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width':5
      }
    });

  }


  function handler(){
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/-122.39636,37.79129;-122.39732,37.79283?geometries=geojson&access_token=${mapboxgl.accessToken}`)
      .then(response => {
        const routeData = response.data;
        displayRouteOnMap(routeData);
      }).catch(err => console.error(err));
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on("load", handler);

    map.current.addControl(new ImageControl(), "top-right");
    map.current.addControl(new RulerControl(), "top-right");
    map.current.on("ruler.on", () => console.log("ruler: on"));
    map.current.on("ruler.off", () => console.log("ruler: off"));
  });
  return (
    <div>
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />
    </div>
  );
}
