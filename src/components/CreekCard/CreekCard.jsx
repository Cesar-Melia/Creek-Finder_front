import React from 'react';

import './CreekCard.scss';

const CreekCard = ({ creek }) => {
  return (
    <div className=' cards col-lg-6'>
      <div className='card'>
        <img src={creek.img[0]} className='card__image ' alt='' />
        <div className='card__overlay'>
          <div className='card__header'>
            <div className='card__header-text'>
              <h3 className='card__title'>{creek.name}</h3>
              <span className='card__status'>{creek.province}</span>
            </div>
          </div>
          <p className='card__description'>Playa de {creek.type}</p>
        </div>
      </div>
    </div>
  );
};

export default CreekCard;
