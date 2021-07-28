const BASE_URL = 'http://localhost:3500';

export const getComments = async creekId => {
  const res = await fetch(`${BASE_URL}/comments/${creekId}`);
  const comments = await res.json();

  return comments;
};
