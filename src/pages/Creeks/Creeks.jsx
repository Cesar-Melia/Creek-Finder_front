import { useState } from 'react';
import { CreekList, CreekFilterNav } from '../../components';
import './Creeks.scss';

let creeksSelection;

const Creeks = ({ creeks }) => {
  const [searchParam, setSearchParam] = useState();
  const [searchValue, setSearchValue] = useState();

  console.log('Parametros del filtro: ', searchParam, searchValue);

  const filterCreeks = (param, value) => {
    setSearchParam(param);
    setSearchValue(value);
  };

  if (searchParam && searchValue) {
    creeksSelection = creeks.filter((creek) => creek[searchParam].toLowerCase().includes(searchValue.toLowerCase()));

    console.log('Entra al if:', creeksSelection);
  } else {
    creeksSelection = creeks;
  }

  return (
    <main>
      <div className='creeks'>
        <CreekList creeks={creeksSelection} />
        <CreekFilterNav filterCreeks={filterCreeks} />
      </div>
    </main>
  );
};

export default Creeks;
