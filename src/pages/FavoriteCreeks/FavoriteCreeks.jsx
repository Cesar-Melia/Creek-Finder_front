import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../App';
import { CreekList, CreekFilterNav } from '../../components';

import './FavoriteCreeks.scss';

const FavoriteCreeks = ({ showFooter }) => {
  const { user } = useContext(UserContext);
  const [creeksSelection, setCreeksSelection] = useState([]);

  showFooter(true);

  const setNewSelection = selectedCreeks => {
    setCreeksSelection(selectedCreeks);
  };

  useEffect(() => {
    if (user) {
      setCreeksSelection(user.favorites);
    }
  }, [user]);

  return (
    <>
      {user && (
        <main>
          <div className='creeks'>
            <CreekList creeks={creeksSelection} title={'Calas Favoritas'} />
            <CreekFilterNav creeks={user.favorites} setNewSelection={setNewSelection} />
          </div>
        </main>
      )}
    </>
  );
};

export default FavoriteCreeks;
