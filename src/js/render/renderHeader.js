import { refs } from '../references/refs';

function renderHeader(markup) {
  //функция которая принимает в качестве параметра разметку формы поиска с контейнером для notification либо разметку с кнопками WATCHED и QEUE
  refs.headerCont.innerHTML = markup;
}

export { renderHeader };
