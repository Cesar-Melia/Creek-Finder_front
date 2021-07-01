import React, { useEffect } from 'react';
import { MapImage } from '../../components';

const Map = () => {
  const BASE_URL = 'https://creek-finder.herokuapp.com';

  console.log('Entra en Map');

  useEffect(() => {
    fetch(`${BASE_URL}/creeks`)
      .then((res) => res.json())
      .then((dataRes) => {
        let creeks = dataRes;

        console.log(creeks);
      });
  }, []);

  return (
    <main>
      <MapImage creeks={''} />
    </main>
  );
};

export default Map;
