import React, { useState, useEffect } from 'react';
import { MapImage } from '../../components';

const Map = ({ creeks }) => {
  return (
    <main>
      <MapImage creeks={creeks} />
    </main>
  );
};

export default Map;
