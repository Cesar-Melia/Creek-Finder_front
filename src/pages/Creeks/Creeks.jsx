import React from 'react';
import CreekCard from '../../components/CreekCard/CreekCard';

import './Creek.scss';

const Creeks = ({ creeks }) => {
  return (
<<<<<<< HEAD
    <div className="list">
      <div className="list__content">
        <h4>Creek List</h4>
=======
    <div className='list'>
      <div className='list__content'>
        <h2>Creek List</h2>
>>>>>>> 57d64a7f7731764a3b1e1c54c8d4531f460fde55
      </div>
      <div>
        <div className='container'>
          <div className='row'>
            {creeks.map((creek) => {
              return <CreekCard key={JSON.stringify(creek)} creek={creek} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creeks;
