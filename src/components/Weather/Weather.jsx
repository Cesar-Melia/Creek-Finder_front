import React from 'react'
// import { divIcon } from 'leaflet'
import Sun from './sun.svg'
import Fog from '../../assets/Fog.svg'
import Pcd from '../../assets/Pcd.svg'
import Rain from '../../assets/Rain.svg'
import Snow from '../../assets/Snow.svg'
import Wind from '../../assets/Wind.svg'
import Cloudy from '../../assets/Cloudy.svg'

import './Weather.scss'

const icons = {
  'clear-day': Sun,
  'clear-night': Sun,
  'snow': Snow,
  'rain': Rain,
  'fog': Fog,
  'wind': Wind,
  'cloudy': Cloudy,
  'partly-cloudy-day': Pcd,
  'partly-cloudy-night': Pcd
}


const Weather = ({ weather }) => {
  if (!weather.location) {
    return (<div>Cargando...</div>)
  }
  const apiIcon = weather.location.currentConditions.icon
  const date = Date(weather.location.values.datetime)
  console.log(date)
  return (
    <div className="weather-container">

      <div className="weather-container__card">
        <div className="weather-container__card-up">

          <div className="weather-container__card-left">
            <img src={icons[apiIcon]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[0].datetimeStr.substring(0, 10)}</p>
            <p>Max: {weather.location.values[0].maxt}ºC</p>
            <p>Min: {weather.location.values[0].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">
            <span>Humedad: </span>
            <p>{weather.location.values[0].humidity}%</p>
          </div>
          <div className="span">
            <span>Viento: </span>
            <p>{weather.location.values[0].wspd}km/h</p>
          </div>
          <div className="span">
            <span>Rachas: </span>
            <p>{weather.location.values[0].wgust}km/h</p>
          </div>
        </div>
      </div>

      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src={icons[apiIcon]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[1].datetimeStr.substring(0, 10)}</p>
            <p>Max: {weather.location.values[1].maxt}ºC</p>
            <p>Min: {weather.location.values[1].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">
            <span>Humedad: </span>
            <p>{weather.location.values[1].humidity}%</p>
          </div>
          <div className="span">
            <span>Viento: </span>
            <p>{weather.location.values[1].wspd}km/h</p>
          </div>
          <div className="span">
            <span>Rachas: </span>
            <p>{weather.location.values[1].wgust}km/h</p>
          </div>
        </div>
      </div>


      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src={icons[apiIcon]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[2].datetimeStr.substring(0, 10)}</p>
            <p>Max: {weather.location.values[2].maxt}ºC</p>
            <p>Min: {weather.location.values[2].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">
            <span>Humedad: </span>
            <p>{weather.location.values[2].humidity}%</p>
          </div>
          <div className="span">
            <span>Viento: </span>
            <p>{weather.location.values[2].wspd}km/h</p>
          </div>
          <div className="span">
            <span>Rachas: </span>
            <p>{weather.location.values[2].wgust}km/h</p>
          </div>
        </div>
      </div>

      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src={icons[apiIcon]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[3].datetimeStr.substring(0, 10)}</p>
            <p>Max: {weather.location.values[3].maxt}ºC</p>
            <p>Min: {weather.location.values[3].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">
            <span>Humedad: </span>
            <p>{weather.location.values[3].humidity}%</p>
          </div>
          <div className="span">
            <span>Viento: </span>
            <p>{weather.location.values[3].wspd}km/h</p>
          </div>
          <div className="span">
            <span>Rachas: </span>
            <p>{weather.location.values[3].wgust}km/h</p>
          </div>
        </div>
      </div>

      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src={icons[apiIcon]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[4].datetimeStr.substring(0, 10)}</p>
            <p>Max: {weather.location.values[4].maxt}ºC</p>
            <p>Min: {weather.location.values[4].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">
            <span>Humedad: </span>
            <p>{weather.location.values[4].humidity}%</p>
          </div>
          <div className="span">
            <span>Viento: </span>
            <p>{weather.location.values[4].wspd}km/h</p>
          </div>
          <div className="span">
            <span>Rachas: </span>
            <p>{weather.location.values[4].wgust}km/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather