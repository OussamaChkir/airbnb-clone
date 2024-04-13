'use client'
import React, { useState } from 'react'
import Map from 'react-map-gl';
import Mapbox from 'react-map-gl/dist/esm/mapbox/mapbox';
function Maps() {

    const [viewport, setViewport] = useState({
        width:'100%', 
        height: "100%",
        longitude: -100,
        latitude: 40,
        zoom: 8
    });

    return <Map
    mapLib={import('mapbox-gl')}
    mapboxAccessToken ="pk.eyJ1IjoiZ2VudGxldGh1ZyIsImEiOiJjbG5reDRuZHUyNXJlMnFtbm1rM2ZhYjdyIn0.LLFggHfW956uD3Fj7HE-Dw"
    onViewportChange={(view)=>setViewport(view)}
    {...viewport}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />;

}

export default Maps