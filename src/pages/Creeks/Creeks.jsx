import React from 'react';
import CreekCard from '../../components/CreekCard/CreekCard';

import './Creeks.scss';

const Creeks = ({ creeks }) => {
  return (
    <div className='list'>
      <div className='list__title'>
        <h4>TOP 10 Calas</h4>
      </div>
      <div className='container'>
        <div className='row'>
          {creeks.map((creek) => {
            return <CreekCard key={JSON.stringify(creek)} creek={creek} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Creeks;
