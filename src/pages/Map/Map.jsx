import React, { useState, useEffect } from 'react';
import Detail from '../../pages/Detail/Detail';
import { Weather } from '../../components';
import { MapImage } from '../../components';

import './Map.scss';

const Map = ({ creeks, showFooter }) => {
  const [detailId, setDetailId] = useState(undefined);
  showFooter(false);

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
