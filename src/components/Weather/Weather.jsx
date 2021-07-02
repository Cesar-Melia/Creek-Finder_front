import React from 'react'
// import { divIcon } from 'leaflet'
import './Weather.scss'

const Weather = ({ weather }) => {
  if (!weather.location) {
    return (<div>Cargando...</div>)
  }
  return (
    <div className="weather-container">
      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src="" alt="" />
          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.currentConditions.temp}</p>
            <p>{weather.location.currentConditions.humidity}</p>
            <p>{weather.location.currentConditions.visibility}</p>
          </div>
        </div>
        <div className="weather-container__card-down">
          <p>{weather.location.currentConditions.sunrise}</p>
          <p>{weather.location.currentConditions.sunset}</p>
        </div>
      </div>
    </div>
  )
}

export default Weather