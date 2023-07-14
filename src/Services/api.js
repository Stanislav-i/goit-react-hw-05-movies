const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '58fde9f9a3392c3dbee86a1f2142354e';

export const fetchTrendingData = async () => {
  const data = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  ).then(response => response.json());
  return data;
};

export const fetchMovieData = async (movieId) => {
  const data = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  ).then(response => response.json());
  return data;
};
    
export const fetchReviewData = async movieId => {
  const data = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  ).then(response => response.json());
  return data;
};

export const fetchCastData = async movieId => {
  const data = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  ).then(response => response.json());
  return data;
};

export const fetchSearchedData = async movieTitle => {
  const data = await fetch(
    `${BASE_URL}/search/movie?query=${movieTitle}&api_key=${API_KEY}`
  ).then(response => response.json());
  return data;
};