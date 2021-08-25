const BASE_URL = 'https://creek-finder.herokuapp.com';
const checkSessionUrl = `${BASE_URL}/users/logged`;
const logoutUrl = `${BASE_URL}/auth/logout`;

export const checkSession = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  let res = await fetch(checkSessionUrl, requestOptions);
  let user = await res.json();

  console.log(user);
  if (user) {
    return user;
  }
};

export const logout = async () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  return await fetch(logoutUrl, requestOptions);
};
