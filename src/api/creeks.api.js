const BASE_URL = 'https://creek-finder.herokuapp.com';
const getCreeksUrl = `${BASE_URL}/creeks`;

export const getCreeks = async () => {
  let res = await fetch(getCreeksUrl);
  let creeks = await res.json();

  return creeks;
};
