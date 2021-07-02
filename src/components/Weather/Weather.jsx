import React from 'react'
// import { divIcon } from 'leaflet'

const Weather = ({ weather }) => {
  if (!weather.location) {
    return (<div>Cargando...</div>)
  }
  return (
    <div>{weather.location.address}</div>
  )
}

export default Weather