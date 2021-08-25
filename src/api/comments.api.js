const BASE_URL = 'https://creek-finder.herokuapp.com';

export const getComments = async creekId => {
  const res = await fetch(`${BASE_URL}/comments/${creekId}`);
  const comments = await res.json();

  return comments;
};
