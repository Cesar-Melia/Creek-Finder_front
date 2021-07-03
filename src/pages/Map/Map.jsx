import React, { useState } from 'react';
import Detail from '../../pages/Detail/Detail';
import { Weather } from '../../components';
import { MapImage } from '../../components';

import './Map.scss';

const Map = ({ creeks }) => {
  const [detailId, setDetailId] = useState(undefined);

  if (detailId) {
    const creek = creeks.find((creek) => creek._id === detailId);
    console.log('Creek: ', creek);

    return (
      <section>
        <Detail creek={creek} />
      </section>
    );
  } else {
    return (
      <main className='map-page-container'>
        <MapImage creeks={creeks} setDetailId={setDetailId} />

      </main>
    );
  }
};

export default Map;
