import React from 'react';
import { CreekCard } from '../../components';

import './TopCreeks.scss';

const TopCreeks = ({ creeks, showFooter }) => {
  showFooter(true);

  const sortTopCreeks = () => {
    const sortedCreeks = creeks
      .sort((a, b) => {
        if (a.timesFav > b.timesFav) {
          return -1;
        }
        if (a.timesFav < b.timesFav) {
          return 1;
        }
        return 0;
      })
      .slice(0, 10);

    console.log('Calas ordenadas: ', sortedCreeks);
    return sortedCreeks;
  };

  return (
    <div className='top-creeks'>
      <div className='top-creeks__title'>
        <h4>TOP 10 Calas</h4>
      </div>
      <div className='container'>
        <div className='row'>
          {sortTopCreeks().map(creek => {
            return <CreekCard key={JSON.stringify(creek)} creek={creek} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCreeks;
