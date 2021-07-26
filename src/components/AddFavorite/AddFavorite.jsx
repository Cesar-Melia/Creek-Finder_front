import { useEffect, useState } from 'react';
import './AddFavorite.scss';

const BASE_URL = 'http://localhost:3500';

const AddFavorite = ({ creekId }) => {
  const emptyHeart = 'icon-heart add-favorite__icon ';
  const fullHeart = 'icon-heart_full add-favorite__icon add-favorite__icon--red';

  const [option, setOption] = useState('');
  const [switchFavorite, setSwitchFavorite] = useState(false);

  useEffect(() => {
    const checkFavorites = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      };

      let res = await fetch(`${BASE_URL}/users/logged`, requestOptions);
      let user = await res.json();

      if (user.favorites && user.favorites.find(fav => fav === creekId)) {
        setOption('delete');
        setSwitchFavorite(true);
      } else {
        setOption('add');
        setSwitchFavorite(false);
      }
    };

    checkFavorites();
  }, [switchFavorite]);

  console.log(creekId);

  const setFavorites = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };

    await fetch(`${BASE_URL}/users/${option}-favorite/${creekId}`, requestOptions);

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
