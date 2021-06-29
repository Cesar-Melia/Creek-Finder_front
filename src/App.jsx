import React, { useState } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from './assets/leaf-green.png';
import leafRed from './assets/leaf-red.png';
import leafOrange from './assets/leaf-orange.png';
import './App.scss';
import leafShadow from './assets/leaf-shadow.png';

const App = () => {
  const [state, setState] = useState({
    greenIcon: {
      lat: 35.787449,
      lng: -78.6438197,
    },
    redIcon: {
      lat: 35.774416,
      lng: -78.633271,
    },
    orangeIcon: {
      lat: 35.77279,
      lng: -78.652305,
    },
    zoom: 13,
  });

  const grenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76],
  });

  const redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -86],
  });

  const orangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -86],
  });

  const positionRedIcon = [state.redIcon.lat, state.redIcon.lng];
  const positionGreenIcon = [state.greenIcon.lat, state.greenIcon.lng];
  const positionOrangeIcon = [state.orangeIcon.lat, state.orangeIcon.lng];
  return (
    <Map className='map' center={positionGreenIcon} zoom={state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={positionGreenIcon} icon={grenIcon}>
        <Popup>I am a green leaf</Popup>
      </Marker>
      <Marker position={positionRedIcon} icon={redIcon}>
        <Popup>I am a red leaf</Popup>
      </Marker>
      <Marker position={positionOrangeIcon} icon={orangeIcon}>
        <Popup>I am an orange leaf</Popup>
      </Marker>
    </Map>
  );
};

export default App;
