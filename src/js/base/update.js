import { readState } from './state';
import { PAGE_TYPE } from './state';
import { renderGallery } from '../render/renderGallery';
import { renderHeader } from '../render/renderHeader';
import { renderNotification } from '../render/renderNotification';
import { renderPagination } from '../render/renderPagination';
import { renderFilmModal } from '../render/renderFilmModal';
import { LS_KEY_TYPE, readLocalStorage } from '../utils/localStorage';
import { divideOnPages } from '../utils/devideOnPages';
import { renderTeamModal } from '../render/renderTeamModal';
import { fetchGenres, fetchSearchMovie, fetchTrending } from '../api/api-service';
import { refs } from '../references/refs';
import { setGenres } from '../utils/setGenres';
import { createFormListner, removeFormListner } from './listeners';
import { homeMarkup, myLibMarkup } from '../templates/header-content-templates';

//самая главная функция, которая будет обновлять весь интерфейс
function updateInterface() {
  //считываем из sessionStorage state
  const state = readState();
  removeFormListner();
  const moviesIdArr = [];
  const moviesIdArrPaged = [];

  switch (state.pageType) {
    case PAGE_TYPE.TRENDS:
      fetchTrending(state.currentPage)
        .then(data => {
          return fetchGenres().then(genres => setGenres(data, genres));
        })
        .then(data => {
          renderGallery(data.results);
          renderPagination(data.total_pages, state.currentPage);
        });

      renderHeader(homeMarkup);
      createFormListner();
      return;

    case PAGE_TYPE.SEARCH:
      fetchSearchMovie(state.search, state.currentPage)
        .then(data => {
          return fetchGenres().then(genres => setGenres(data, genres));
        })
        .then(data => {
          renderGallery(data.results);
          renderPagination(data.total_pages, state.currentPage);
        });
      renderHeader(homeMarkup);
      refs.searchForm[0].elements[0].value = state.search;
      createFormListner();
      return;

    case PAGE_TYPE.LIB_WATCHED:
      //moviesIdArr = readLocalStorage(LS_KEY_TYPE.WATCHED); //считываем из localstorage массив фильмов с WATCHED
      //moviesIdArrPaged = divideOnPages(moviesIdArr, 8);
      //data = []; //вызываем api функцию которая получает movies в параметры передаем moviesIdArrPaged[state.currentPage-1]
      //renderGallery(data);
      //renderPagination(moviesIdArrPaged.length, state.currentPage);
      renderHeader(myLibMarkup);

      //cнять слушатель с формы поиска
      //на ссылку MyLib вешаем класс active - это нужно только для того случая, если пользователь перезагрузит страницу
      return;

    case PAGE_TYPE.LIB_QUEUE:
      //moviesIdArr = readLocalStorage(LS_KEY_TYPE.QUEUE); //считываем из localstorage массив фильмов с WATCHED
      //moviesIdArrPaged = divideOnPages(moviesIdArr, 8);
      //data = []; //вызываем api функцию которая получает movies в параметры передаем moviesIdArrPaged[state.currentPage-1]
      //renderGallery(data);
      //renderPagination(moviesIdArrPaged.length, state.currentPage);
      //cнять слушатель с формы поиска
      //на ссылку MyLib вешаем класс active - это нужно только для того случая, если пользователь перезагрузит страницу
      renderHeader(myLibMarkup);
      return;
  }

  if (state.isModalOpen) {
    //у div с модалкой убираем class visually-hidden
    if (state.modalFilmId === null) {
      renderTeamModal(); //так как в state нет записанного filmID то рендерим в модалку команду
    }
    const filmDetailsData = null; //делаем запрос по modalFilmId
    renderFilmModal(filmDetailsData); //рендерим в модалку информацию о фильме
  }
}

export { updateInterface };
