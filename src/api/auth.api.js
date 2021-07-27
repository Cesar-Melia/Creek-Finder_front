const BASE_URL = 'http://localhost:3500';
const checkSessionUrl = `${BASE_URL}/users/logged`;
const logoutUrl = `${BASE_URL}/auth/logout`;

export const CheckSession = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  let res = await fetch(checkSessionUrl, requestOptions);
  let user = await res.json();

  return user;
};

export const logout = async () => {
  console.log('logout...');

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };

  await fetch(logoutUrl, requestOptions);
};
