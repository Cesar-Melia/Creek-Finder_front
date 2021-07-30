import { useState, useContext, useEffect } from 'react';
import { CreekList, CreekFilterNav } from '../../components';
import { UserContext } from '../../App';

import './Creeks.scss';

const Creeks = ({ showFooter }) => {
  const { creeks } = useContext(UserContext);
  const [creeksSelection, setCreeksSelection] = useState([]);

  showFooter(true);
  const [searchParam, setSearchParam] = useState();
  const [searchValue, setSearchValue] = useState();

  console.log('Parametros del filtro: ', searchParam, searchValue);

  useEffect(() => {
    if (creeks) {
      let selection = [];

      if (searchParam && searchValue) {
        selection = creeks.filter(creek => creek[searchParam].toLowerCase().includes(searchValue.toLowerCase()));
      } else {
        selection = creeks;
      }

      setCreeksSelection(selection);
    }
  }, [creeks, searchValue, searchParam]);

  const filterCreeks = (param, value) => {
    setSearchParam(param);
    setSearchValue(value);
  };

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
