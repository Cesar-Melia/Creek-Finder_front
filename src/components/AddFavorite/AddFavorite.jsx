import { useEffect, useState, useContext } from 'react';
import { addFavorite, deleteFavorite } from '../../api/user.api';
import { UserContext } from '../../App';

import './AddFavorite.scss';

const AddFavorite = ({ creekId }) => {
  const { user, getUser } = useContext(UserContext);

  const emptyHeart = 'icon-heart add-favorite__icon ';
  const fullHeart = 'icon-heart_full add-favorite__icon add-favorite__icon--red';

  const [option, setOption] = useState('');
  const [switchFavorite, setSwitchFavorite] = useState(false);

  useEffect(() => {
    // console.log('Usuario: ', user);
    // console.log('Cala: ', creekId);
    // console.log('switcFavorite: : ', switchFavorite);

    if (user) {
      console.log('favoritos: ', user.favorites);

      if (user.favorites && user.favorites.find(fav => fav._id === creekId)) {
        setOption('delete');
        console.log('if option: ', option);
        setSwitchFavorite(true);
      } else {
        setOption('add');
        console.log('else option: ', option);
        setSwitchFavorite(false);
      }
    }

    console.log('opcion: ', option);
  }, [switchFavorite]);

  const setFavorites = async () => {
    if (option === 'delete') {
      console.log('Entra en DELETE');
      await deleteFavorite(creekId);
    }

    if (option === 'add') {
      console.log('Entra en ADD');
      await addFavorite(creekId);
    }

    setSwitchFavorite(!switchFavorite);
    getUser();
  };

  return (
    <div className='add-favorite'>
      <span className='add-favorite__text'>Añadir a favoritos</span>

      <span
        className={option === 'delete' ? fullHeart : emptyHeart}
        onClick={() => {
          setFavorites();
        }}
      ></span>
    </div>
  );
};

export default AddFavorite;
