import React from 'react'
// import { divIcon } from 'leaflet'
import Sun from './sun.svg'
import Pcd from '../../assets/Pcd.svg'
import Rain from '../../assets/Rain.svg'
import Snow from '../../assets/Snow.svg'
import Wind from '../../assets/Wind.svg'
import Cloudy from '../../assets/Cloudy.svg'
import Viento from '../../assets/viento.svg'
import WS from '../../assets/WindStrike.svg'
import Humidity from '../../assets/Humidity.svg'

import './Weather.scss'

const icons = {
  'Clear': Sun,
  'Snow': Snow,
  'Rain': Rain,
  'Freezinf Fog': Wind,
  'Partially cloudy': Pcd,
  'Funel Cloud/Tornado': Cloudy,

}


const Weather = ({ weather }) => {
  if (!weather.location) {
    return (<div>Cargando...</div>)
  }
  const apiIcon = weather.location.values[0].conditions
  const apiIcon1 = weather.location.values[1].conditions
  const apiIcon2 = weather.location.values[2].conditions
  const apiIcon3 = weather.location.values[3].conditions
  const apiIcon4 = weather.location.values[4].conditions

  const date = Date(weather.location.values[5].datetime)
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
            <p className="weather-container__max">{weather.location.values[0].maxt}ºC</p>
            <p className="weather-container__min">{weather.location.values[0].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">

            <p>{weather.location.values[0].humidity}%</p>
            <img src={Humidity} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[0].wspd}km/h</p>
            <img src={Viento} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[0].wgust}km/h</p>
            <img src={WS} className="weather-container__down-icon" />
          </div>
        </div>
      </div>

      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src={icons[apiIcon1]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[1].datetimeStr.substring(0, 10)}</p>
            <p className="weather-container__max">{weather.location.values[1].maxt}ºC</p>
            <p className="weather-container__min">{weather.location.values[1].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">

            <p>{weather.location.values[1].humidity}%</p>
            <img src={Humidity} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[1].wspd}km/h</p>
            <img src={Viento} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[1].wgust}km/h</p>
            <img src={WS} className="weather-container__down-icon" />
          </div>
        </div>
      </div>


      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src={icons[apiIcon2]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[2].datetimeStr.substring(0, 10)}</p>
            <p className="weather-container__max">{weather.location.values[2].maxt}ºC</p>
            <p className="weather-container__min">{weather.location.values[2].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">

            <p>{weather.location.values[2].humidity}%</p>
            <img src={Humidity} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[2].wspd}km/h</p>
            <img src={Viento} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[2].wgust}km/h</p>
            <img src={WS} className="weather-container__down-icon" />
          </div>
        </div>
      </div>

      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src={icons[apiIcon3]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[3].datetimeStr.substring(0, 10)}</p>
            <p className="weather-container__max">{weather.location.values[3].maxt}ºC</p>
            <p className="weather-container__min">{weather.location.values[3].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">

            <p>{weather.location.values[3].humidity}%</p>
            <img src={Humidity} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[3].wspd}km/h</p>
            <img src={Viento} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[3].wgust}km/h</p>
            <img src={WS} className="weather-container__down-icon" />
          </div>
        </div>
      </div>

      <div className="weather-container__card">
        <div className="weather-container__card-up">
          <div className="weather-container__card-left">
            <img src={icons[apiIcon4]} alt="EL SOLACO" className="icon" />

          </div>
          <div className="weather-container__card-right">
            <p>{weather.location.values[4].datetimeStr.substring(0, 10)}</p>
            <p className="weather-container__max">{weather.location.values[4].maxt}ºC</p>
            <p className="weather-container__min">{weather.location.values[4].mint}ºC</p>
          </div>
        </div>
        <div className="weather-container__card-down">

          <div className="span">

            <p>{weather.location.values[4].humidity}%</p>
            <img src={Humidity} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[4].wspd}km/h</p>
            <img src={Viento} className="weather-container__down-icon" />
          </div>
          <div className="span">

            <p>{weather.location.values[4].wgust}km/h</p>
            <img src={WS} className="weather-container__down-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather