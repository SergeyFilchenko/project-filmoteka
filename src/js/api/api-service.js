const API_KEY = 'bbe6ca7cc6c7a5ddd38cfa2cd00fb2a2';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export async function fetchTrending(page) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );
}

export function fetchSearchMovie(query, page) {
  return fetchWithErrorHandling(`
  https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false&page=${page}`);
}

export function fetchGenres() {
  return fetchWithErrorHandling(`
  https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
}
