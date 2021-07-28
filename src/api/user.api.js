const BASE_URL = 'http://localhost:3500';
const addFavoriteUrl = `${BASE_URL}/users/add-favorite/`;
const deleteFavoriteUrl = `${BASE_URL}/users/delete-favorite/`;

export const addFavorite = async creekId => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  let res = await fetch(`${addFavoriteUrl}/${creekId}`, requestOptions);
  let user = await res.json();

  return user;
};

export const deleteFavorite = async creekId => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  let res = await fetch(`${deleteFavoriteUrl}/${creekId}`, requestOptions);
  let user = await res.json();

  return user;
};

export const editUser = async form => {
  const requestOptions = {
    method: 'PUT',
    headers: {},
    body: form,
    credentials: 'include',
  };

  return await fetch(`${BASE_URL}/users/edit/logged`, requestOptions);
};
