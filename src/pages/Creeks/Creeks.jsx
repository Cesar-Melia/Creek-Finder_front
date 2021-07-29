import { useState, useContext } from 'react';
import { CreekList, CreekFilterNav } from '../../components';
import { UserContext } from '../../App';

import './Creeks.scss';

let creeksSelection;

const Creeks = ({ showFooter }) => {
  const { creeks } = useContext(UserContext);

  showFooter(true);
  const [searchParam, setSearchParam] = useState();
  const [searchValue, setSearchValue] = useState();

  console.log('Parametros del filtro: ', searchParam, searchValue);

  const filterCreeks = (param, value) => {
    setSearchParam(param);
    setSearchValue(value);
  };

  if (searchParam && searchValue) {
    creeksSelection = creeks.filter(creek => creek[searchParam].toLowerCase().includes(searchValue.toLowerCase()));

    console.log('Entra al if:', creeksSelection);
  } else {
    creeksSelection = creeks;
  }

  return (
    <main>
      <div className='creeks'>
        <CreekList creeks={creeksSelection} title={'Lista de Calas'} />
        <CreekFilterNav filterCreeks={filterCreeks} />
      </div>
    </main>
  );
};

export default Creeks;
