import { PAGE_TYPE, readState } from '../base/state';
import { refs } from '../references/refs';
import { homeMarkup, myLibMarkup } from '../templates/markupHeader';
const MARKUP_HEADER_TYPE = {
  FORM: 'form',
  BUTTONS: 'buttons',
};

function renderHeader(markupType) {
  const containerMarkup = document.querySelector('.js-container-markup');
  switch (markupType) {
    case MARKUP_HEADER_TYPE.FORM:
      containerMarkup.innerHTML = homeMarkup;
      break;

    case MARKUP_HEADER_TYPE.BUTTONS:
      containerMarkup.innerHTML = myLibMarkup;

      switch (readState().pageType) {
        case PAGE_TYPE.LIB_WATCHED:
          refs.watchedBtn[0].classList.add('header-filter__btn-isActive');
          break;
        case PAGE_TYPE.LIB_QUEUE:
          refs.queueBtn[0].classList.add('header-filter__btn-isActive');
          break;
      }
      break;
  }
}

export { renderHeader, MARKUP_HEADER_TYPE };
