import React from 'react';
import { CreekCard } from '../../components';

import './TopCreeks.scss';

const TopCreeks = ({ creeks }) => {
  return (
    <div className='top-creeks'>
      <div className='top-creeks__title'>
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

export default TopCreeks;
