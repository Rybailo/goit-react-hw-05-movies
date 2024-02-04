const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '63a82337917a31c35dd7954063a86f96';

export const getApi = () => {
  fetch(`${BASE_URL}/trending/get-trending`),
    {
      headers: {
        'X-Api-Key': API_KEY,
      },
    };
};
