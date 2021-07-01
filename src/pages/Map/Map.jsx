import React, { useEffect } from 'react';
import { MapImage } from '../../components';

const Map = () => {
  const BASE_URL = 'http://localhost:3500';
  console.log('Entra en Map');

  useEffect(() => {
    const getCreeks = async () => {
      let res = await fetch(`${BASE_URL}/creeks`);
      let creeks = await res.json();

      console.log(creeks);
    };

    getCreeks();
  }, []);

  return (
    <main>
      <MapImage creeks={''} />
    </main>
  );
};

export default Map;
