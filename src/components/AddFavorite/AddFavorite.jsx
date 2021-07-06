import { useEffect, useState } from 'react';
import './AddFavorite.scss';

const BASE_URL = 'http://localhost:3500';

const AddFavorite = ({ creekId }) => {
  const emptyHeart = 'icon-heart add-favorite__icon ';
  const fullHeart = 'icon-heart_full add-favorite__icon add-favorite__icon--red';
  let isFavorite;

  const [option, setOption] = useState('');

  useEffect(() => {
    const checkFavorites = async () => {
      let res = await fetch(`${BASE_URL}/users/logged`);
      let user = await res.json();

      user.favorites && user.favorites.find((fav) => fav === creekId) ? setOption('delete') : setOption('add');
    };

    checkFavorites();
  }, []);

  console.log(creekId);

  const setFavorites = async () => {
    await fetch(`${BASE_URL}/users/${option}-favorite/${creekId}`);
  };

  return (
    <div className='add-favorite'>
      <span className='add-favorite__text'>Añadir a favoritos</span>

      <span
        className={isFavorite ? fullHeart : emptyHeart}
        onClick={() => {
          setFavorites();
        }}
      ></span>
    </div>
  );
};

export default AddFavorite;
