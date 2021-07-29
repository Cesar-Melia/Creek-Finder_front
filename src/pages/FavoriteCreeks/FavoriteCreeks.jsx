import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { CreekList, CreekFilterNav } from '../../components';

import './FavoriteCreeks.scss';

let creeksSelection;

const FavoriteCreeks = ({ showFooter }) => {
  const { user } = useContext(UserContext);
  console.log(user);

  showFooter(true);
  const [searchParam, setSearchParam] = useState();
  const [searchValue, setSearchValue] = useState();

  console.log('Parametros del filtro: ', searchParam, searchValue);

  const filterCreeks = (param, value) => {
    setSearchParam(param);
    setSearchValue(value);
  };
  if (user) {
    if (searchParam && searchValue) {
      creeksSelection = user.favorites.filter(creek =>
        creek[searchParam].toLowerCase().includes(searchValue.toLowerCase())
      );

      console.log('Entra al if:', creeksSelection);
    } else {
      creeksSelection = user.favorites;
    }
  }

  return (
    <>
      {user && (
        <main>
          <div className='creeks'>
            <CreekList creeks={creeksSelection} title={'Calas Favoritas'} />
            <CreekFilterNav filterCreeks={filterCreeks} />
          </div>
        </main>
      )}
    </>
  );
};

export default FavoriteCreeks;
