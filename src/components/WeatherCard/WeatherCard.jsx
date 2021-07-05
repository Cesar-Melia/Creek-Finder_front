import React from 'react';

import Viento from '../../assets/viento.svg';
import Humidity from '../../assets/Humidity.svg';
import WS from '../../assets/arrows.png';

import Sun from '../../assets/sun.svg';
import Pcd from '../../assets/Pcd.svg';
import Rain from '../../assets/Rain.svg';
import Snow from '../../assets/Snow.svg';
import Wind from '../../assets/Wind.svg';
import Cloudy from '../../assets/Cloudy.svg';

import './WeatherCard.scss';

const ICONS = {
  Clear: Sun,
  Snow: Snow,
  Rain: Rain,
  'Freezinf Fog': Wind,
  'Partially cloudy': Pcd,
  'Funel Cloud/Tornado': Cloudy,
  Overcast: Cloudy,
};

const DAYS = {
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
  0: 'Domingo',
};

const WeatherCard = ({ wtr }) => {
  const apiIcon = wtr.conditions;

  const date = new Date(wtr.datetime);
  const dayMonth = date.getDate();
  const dayWeek = DAYS[date.getDay()];

  return (
    <div className='weather-card-container__card'>
      <div className='weather-card-container__name'>
        <span className='weather-card-container__day'>{dayWeek}</span>
        <span>{dayMonth}</span>
      </div>

      <div className='weather-card-container__card-up'>
        <div className='weather-card-container__card-left'>
          <img src={ICONS[apiIcon]} alt='EL SOLACO' className='icon' />
        </div>
        <div className='weather-card-container__card-right'>
          <p className='weather-card-container__max'>{wtr.maxt}ºC</p>
          <p className='weather-card-container__min'>{wtr.mint}ºC</p>
        </div>
      </div>
      <div className='weather-card-container__card-down'>
        <div className='span'>
          <p>{wtr.humidity}%</p>
          <img src={Humidity} className='weather-card-container__down-icon' />
        </div>
        <div className='span'>
          <p>{wtr.wspd}km/h</p>
          <img src={Viento} className='weather-card-container__down-icon' />
        </div>
        <div className='span'>
          <p>{wtr.wgust}km/h</p>
          <img src={WS} className='weather-card-container__down-icon' />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
