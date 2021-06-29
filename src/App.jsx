import React, { useState } from 'react';
import L from 'leaflet';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapImage } from './components';

import leafGreen from './assets/leaf-green.png';
import leafRed from './assets/leaf-red.png';
import leafOrange from './assets/leaf-orange.png';
import './App.scss';
import leafShadow from './assets/leaf-shadow.png';

const App = () => {
  const [marks, setMarks] = useState([
    {
      lat: 39.9605,
      lng: 4.0059,
    },
    {
      lat: 35.774416,
      lng: -78.633271,
    },
    {
      lat: 35.77279,
      lng: -78.652305,
    },
  ]);

  return <MapImage />;
};

export default App;
