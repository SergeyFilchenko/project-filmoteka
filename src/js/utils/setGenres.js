function setGenres(data, genres) {
  for (let i = 0; i < data.results.length; i += 1) {
    for (let y = 0; y < data.results[i].genre_ids.length; y += 1) {
      const idToChange = data.results[i].genre_ids[y];
      data.results[i].genre_ids[y] = genres.genres.find(({ id }) => id === idToChange).name;
    }
  }
  return data;
}

export { setGenres };
