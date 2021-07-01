import React, { useState, useEffect } from 'react';
import Detail from '../../pages/Detail/Detail';

import { MapImage } from '../../components';

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
      <main>
        <MapImage creeks={creeks} setDetailId={setDetailId} />
      </main>
    );
  }
};

export default Map;
