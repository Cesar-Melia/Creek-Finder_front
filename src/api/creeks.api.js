const BASE_URL = 'http://localhost:3500';
const getCreeksUrl = `${BASE_URL}/creeks`;

export const getCreeks = async () => {
  let res = await fetch(getCreeksUrl);
  let creeks = await res.json();

  return creeks;
};
