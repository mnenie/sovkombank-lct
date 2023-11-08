import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'; 

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.39636);
  const [lat, setLat] = useState(37.79129);
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
    const startMarker = new mapboxgl.Marker({ color: 'green' })
    .setLngLat(coordinates[0])
    .addTo(map.current);

  const endMarker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(coordinates[coordinates.length - 1])
    .addTo(map.current);
  }


  function handler(){
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/-122.39636,37.79129;-122.39732,37.79283?geometries=geojson&access_token=${import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}`)
      .then(response => {
        const routeData = response.data;
        displayRouteOnMap(routeData);
      }).catch(err => console.error(err));
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    
    map.current.on('load', handler);
    
  });


  
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} style={{width:'900px', height:'500px'}} />
    </div>
  );
}
