import { refs } from '../references/refs';

function renderGallery(data) {
  //функция которая принимает массив объектов, полученный от api (при чем не важно будут это тренды, либо поисковой запрос пользователя, либо бибилиотека)
  //ничего не возвращает
  const markup = data
    .map(({ id, poster_path, title, genre_ids, release_date = '' }) => {
      return `
        <li class="film-card" data-id=${id}>
          <img class="film-card__image" src='https://image.tmdb.org/t/p/w500/${poster_path}' alt="${title}"/>         
            <p class="film-card__title">${title}</p>
            <p class="film-card__genre">${genre_ids.join(', ')} | ${release_date.substr(
        0,
        4,
      )}</p>         
        </li>`;
    })
    .join('');
  refs.gallery.innerHTML = markup;
}

export { renderGallery };
