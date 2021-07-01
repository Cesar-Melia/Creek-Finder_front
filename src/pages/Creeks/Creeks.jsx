import React from 'react';
import CreekCard from '../../components/CreekCard/CreekCard'

const Creeks = ({ creeks }) => {

  return (
    <div>
      {creeks.map(creek => {
        return (<CreekCard key={JSON.stringify(creek)} creek={creek} />)
      })}
    </div>
  );
};

export default Creeks;
