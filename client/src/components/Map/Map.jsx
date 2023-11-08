import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import { RulerControl, ImageControl } from "mapbox-gl-controls";
import "mapbox-gl-controls/lib/controls.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXlhYW56YXZlcmkiLCJhIjoiY2ttZHVwazJvMm95YzJvcXM3ZTdta21rZSJ9.WMpQsXd5ur2gP8kFjpBo8g";

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.39636);
  const [lat, setLat] = useState(37.79129);
  const [zoom, setZoom] = useState(12);
  function handler() {
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/-122.39636,37.79129;-122.39732,37.79283?geometries=geojson&access_token=${mapboxgl.accessToken}`
      )
      .then((response) => {
        const routeData = response.data;
        console.log(routeData);

        if (routeData.routes && routeData.routes.length > 0) {
          // Отображаем основной маршрут
          displayRouteOnMap(routeData.routes[0], true);

          // Отображаем дополнительные маршруты
          routeData.routes.slice(1).forEach((additionalRoute, index) => {
            displayRouteOnMap(additionalRoute, false, index + 1);
          });
        } else {
          console.error("Нет данных");
        }
      })
      .catch((err) => console.error(err));
  }
  function displayRouteOnMap(routeData, isRoute, index) {
    const coordinates = routeData.geometry.coordinates;
    // const addRoutes = routeData.waypoints
    const color = isRoute ? "#3887be" : "#808080";
    const layerId = isRoute ? "main-route" : `additional-route-${index}`;
    const existingLayer = map.current.getLayer(layerId);

    if (existingLayer) {
      map.current.setPaintProperty(layerId, "line-color", color);
    } else {
      map.current.addLayer({
        id: layerId,
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coordinates,
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": color,
          "line-width": 5,
        },
      });
    }
    if (isRoute) {
      const startMarker = new mapboxgl.Marker({ color: "green" })
        .setLngLat(coordinates[0])
        .addTo(map.current);

      const endMarker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(coordinates[coordinates.length - 1])
        .addTo(map.current);
    }
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
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} style={{ width: "900px", height: "500px" }} />
    </div>
  );
}