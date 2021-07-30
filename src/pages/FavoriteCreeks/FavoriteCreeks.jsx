import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../App';
import { CreekList, CreekFilterNav } from '../../components';

import './FavoriteCreeks.scss';

const FavoriteCreeks = ({ showFooter }) => {
  const { user } = useContext(UserContext);

  const [creeksSelection, setCreeksSelection] = useState([]);
  // console.log(user);

  showFooter(true);
  const [searchParam, setSearchParam] = useState();
  const [searchValue, setSearchValue] = useState();

  // console.log('Parametros del filtro: ', searchParam, searchValue);

  useEffect(() => {
    if (user) {
      let selection = [];

      if (searchParam && searchValue) {
        selection = user.favorites.filter(creek =>
          creek[searchParam].toLowerCase().includes(searchValue.toLowerCase())
        );
      } else {
        selection = user.favorites;
      }

      setCreeksSelection(selection);
    }
  }, [user, searchValue, searchParam]);

  const filterCreeks = (param, value) => {
    setSearchParam(param);
    setSearchValue(value);
  };

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
