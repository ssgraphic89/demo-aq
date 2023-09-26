import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import anime from 'animejs';
import CardGame from './CardGame';
import './App.css'; // Import your general CSS file
mapboxgl.accessToken = 'pk.eyJ1IjoiYXVnbWVudG9yaWEiLCJhIjoiY2xicGVnZG02MDJrNzNvczNmenh6dTFvciJ9.zh3QVMRpPYtFcE7wtMQfyQ';



function App() {
      const mapContainer = useRef(null);
      const map = useRef(null);
      const [lng, setLng] = useState(54.0550);
      const [lat, setLat] = useState(25.2027);
      const [zoom, setZoom] = useState(1.50);
      
      useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/augmentoria/cln0e3ne9031z01qx8t1m9ws1',
      center: [lng, lat],
      zoom: zoom,
      projection: 'globe'
      });
      
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      
      });
      });
       

      return (
        <div className="background">
  
              <div className="sidebar">
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
              </div>
              <div ref={mapContainer} className="map-container" />

              <CardGame />

        </div>
        
      );
    
}
export default App;
