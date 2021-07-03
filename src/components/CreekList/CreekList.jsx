import { useState } from 'react';
import { CreekListItem, MapButton } from '../../components';
import './CreekList.scss';

const CreekList = ({ creeks }) => {
  const [searchParam, setSearchParam] = useState();
  const [searchValue, setSearchValue] = useState();

  if (searchParam && searchValue) {
    const creeksSelection = creeks.filter((creek) => creek[searchParam] === searchValue);

    return (
      <section>
        {creeksSelection && creeksSelection.map((creek) => <CreekListItem key={JSON.stringify(creek)} creek={creek} />)}
      </section>
    );
  }

  return (
    <section className='list'>
      <div className='list__title-block'>
        <h2 className='list__title'>Listado de Calas</h2>
        <MapButton />
      </div>
      <div>
        {creeks.map((creek) => (
          <CreekListItem key={JSON.stringify(creek)} creek={creek} />
        ))}
      </div>
    </section>
  );
};

export default CreekList;
