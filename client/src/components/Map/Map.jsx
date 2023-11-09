import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import { ImageControl } from "mapbox-gl-controls";
import "mapbox-gl-controls/lib/controls.css";
import "./marker.scss"
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export default function Map({coordinates}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(38.976);
  const [lat, setLat] = useState(45.0448);
  const [zoom, setZoom] = useState(12);

  function displayRouteOnMap(routeData) {
    const coords = routeData.routes[0].geometry.coordinates;
    
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
            coordinates: coords
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


    for(let i =0; i < coordinates.length; i++) {
      const el = document.createElement('div');
      el.className = 'marker';
      el.innerHTML = i+1;
      new mapboxgl.Marker(el)
      .setLngLat(coordinates[i].split(',').map(x => parseFloat(x)))
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h3>${"Название задачи"}</h3><p>${"Описание"}</p>`
          )
      )
      .addTo(map.current);
    }      
    
  }


  function handler(){
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    const coords = coordinates.join(';')
    axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${coords}?annotations=maxspeed&overview=full&geometries=geojson&access_token=${mapboxgl.accessToken}`)
      .then(response => {
        const routeData = response.data;
        displayRouteOnMap(routeData);
      }).catch(err => console.error(err));
  }

  useEffect(() => {
    if (map.current) return; 
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

  });
  return (
    <div>
      <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />
    </div>
  );
}
