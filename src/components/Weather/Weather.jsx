import React, { useState, useEffect } from 'react';
// import { divIcon } from 'leaflet'

import WeatherCard from '../WeatherCard/WeatherCard';

import './Weather.scss';

const Weather = ({ lat, lng }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      let res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=XJW3MMM5LMPQU2KXVDRCC6S6R&dataElements=default&locations=${lat},${lng}`
      );
      let apiWeather = await res.json();
      setWeather(apiWeather);
    };

    getWeather();
  }, []);

  if (!weather.location && lat && lng) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='weather-container'>
      {weather.location.values.map((wtr, index) => {
        if (index < 7) {
          return <WeatherCard key={JSON.stringify(wtr)} wtr={wtr} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Weather;
