import { useEffect, useState, useContext } from 'react';
import { addFavorite, deleteFavorite } from '../../api/user.api';
import { UserContext } from '../../App';

import './AddFavorite.scss';

const AddFavorite = ({ creekId }) => {
  const { user } = useContext(UserContext);

  const emptyHeart = 'icon-heart add-favorite__icon ';
  const fullHeart = 'icon-heart_full add-favorite__icon add-favorite__icon--red';

  const [option, setOption] = useState('');
  const [switchFavorite, setSwitchFavorite] = useState(false);

  useEffect(() => {
    console.log('Usuario: ', user);
    console.log('Cala: ', creekId);

    if (user) {
      if (user.favorites && user.favorites.find(fav => fav === creekId)) {
        setOption('delete');
        setSwitchFavorite(true);
      } else {
        setOption('add');
        setSwitchFavorite(false);
      }
    }

    console.log('opcion: ', option);
  }, [switchFavorite]);

  const setFavorites = async () => {
    if (option === 'delete') {
      await deleteFavorite();
    }

    if (option === 'add') {
      await addFavorite();
    }

    setSwitchFavorite(!switchFavorite);
  };

  return (
    <div className='add-favorite'>
      <span className='add-favorite__text'>Añadir a favoritos</span>

      <span
        className={switchFavorite ? fullHeart : emptyHeart}
        onClick={() => {
          setFavorites();
        }}
      ></span>
    </div>
  );
};

export default AddFavorite;
