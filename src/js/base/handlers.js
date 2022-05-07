import { refs } from '../references/refs';
import { readState, writeState } from './state';
import { PAGE_TYPE } from './state';
import { updateInterface } from './update';

function homeLinkClick(e) {
  e.preventDefault();
  writeState({
    pageType: PAGE_TYPE.TRENDS,
    currentPage: 1,
    search: '',
    isModalOpen: false,
    modalFilmId: null,
  });
  updateInterface();
}

//Обработчик на ссылку MyLibrary
function myLibLinkClick(e) {
  e.preventDefault();

  writeState({
    pageType: PAGE_TYPE.LIB_WATCHED,
    currentPage: 1,
    search: '',
    isModalOpen: false,
    modalFilmId: null,
  });
  updateInterface();
}

//Проверка стейта для добавления и удаления классов при перезагрузке 
function checkReloadSite() {
  switch (readState().pageType) {
    case PAGE_TYPE.TRENDS:
      refs.headerContainer.classList.remove('header_libr');
      refs.homePageLink.classList.add('header-nav__isActive');
      refs.myLibPageLink.classList.remove('header-nav__isActive');
      break;

    case PAGE_TYPE.SEARCH:
      refs.headerContainer.classList.remove('header_libr');
      refs.homePageLink.classList.add('header-nav__isActive');
      refs.myLibPageLink.classList.remove('header-nav__isActive');
      break;

    case PAGE_TYPE.LIB_WATCHED:
      refs.headerContainer.classList.add('header_libr');
      refs.homePageLink.classList.remove('header-nav__isActive');
      refs.myLibPageLink.classList.add('header-nav__isActive');
      break;

    case PAGE_TYPE.LIB_QUEUE:
      refs.headerContainer.classList.add('header_libr');
      refs.homePageLink.classList.remove('header-nav__isActive');
      refs.myLibPageLink.classList.add('header-nav__isActive');
      break;
  }
}

//обработчик submit на форме поиска
function onFormSubmit(e) {
  e.preventDefault();
  //e.currentTarger.ClassList.add() - делаем ее активной через css
  writeState({
    pageType: PAGE_TYPE.SEARCH,
    currentPage: 1,
    search: e.currentTarget.elements.input.value, //записываем в search пользовательский текст
    isModalOpen: false,
    modalFilmId: null,
  });
  updateInterface();
}

//обработчик на кнопку WATCHED и QUEUE - он будет один
function libTypeWatchedBtnClick(e) {
  //С кнопки queue снимаем "current",а на текущую вешаем
  writeState({
    pageType: PAGE_TYPE.LIB_WATCHED,
    currentPage: 1,
    search: '',
    isModalOpen: false,
    modalFilmId: null,
  });
  updateInterface();
}
function libTypeQueueBtnClick(e) {
  //С кнопки WATCHED снимаем "current",а на текущую вешаем
  writeState({
    pageType: PAGE_TYPE.LIB_QUEUE,
    currentPage: 1,
    search: '',
    isModalOpen: false,
    modalFilmId: null,
  });
  updateInterface();
}
//обработчик клика на пагинатор
function onPaginatorClick(page) {
  const state = readState();
  state.currentPage = page;
  writeState(state);
  updateInterface();
}

//обработчик клика по галерее
function onGalleryClick(e) {
  const filmId = null;
  //при клике по карточке фильма в галерее, проверяем e.currentTarget.nodename, если это img или h2, то получаем из дата атрибута родительского элемента id фильма
  //считываем текущий state из sessionStorage
  const state = readState();
  state.modalFilmId = filmId;
  state.isModalOpen = true;
  writeState(state);
  updateInterface();
}

export {
  onFormSubmit,
  homeLinkClick,
  myLibLinkClick,
  libTypeWatchedBtnClick,
  libTypeQueueBtnClick,
  onPaginatorClick,
  checkReloadSite,
};
