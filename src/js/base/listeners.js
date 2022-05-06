import { refs } from '../references/refs';
import { homeLinkClick, onFormSubmit, myLibLinkClick, onGalleryClick } from '../base/handlers';

refs.homeLink.addEventListener('click', homeLinkClick);
refs.myLibLink.addEventListener('click', myLibLinkClick);
refs.gallery.addEventListener('click', onGalleryClick);

function createFormListner() {
  refs.searchForm[0].addEventListener('submit', onFormSubmit);
}

function removeFormListner() {
  if (!refs.searchForm[0]) {
    return;
  }
  refs.searchForm[0].removeEventListener('submit', onFormSubmit);
}

export { createFormListner, removeFormListner };
