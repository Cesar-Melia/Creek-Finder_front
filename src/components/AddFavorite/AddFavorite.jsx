import { useEffect } from 'react';

const BASE_URL = 'http://localhost:3500';

const AddFavorite = ({ creek }) => {
  useEffect(() => {
    let option = '';

    const setFavorites = async () => {
      let res = await fetch(`${BASE_URL}/users/${option}-favorite/${creek._id}`);
      let favorites = await res.json();
    };

    return (
      <div className='add-favorite'>
        <span className='text'>Añadir a favoritos</span>
        <span></span>
      </div>
    );
  });
};

export default AddFavorite;
