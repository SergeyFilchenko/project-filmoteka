import Pagination from 'tui-pagination';
import { onPaginatorClick } from '../base/handlers';

let pagination = null;

function renderPagination(pageAmount, currentPage) {
  //функция которая рендерит пагинацию, pageAmount - взят с api в зависимости от количества карточек на странице, currentPage - взят из state.page
  //текущую страницу нужно выделить стилем Active
  console.log(pageAmount, currentPage);

  pagination = new Pagination('tui-pagination-container', {
    totalItems: pageAmount,
    itemsPerPage: 1,
    visiblePages: 5,
    page: currentPage,
    template: {},
  });

  pagination.on('afterMove', ({ page }) => onPaginatorClick(page));
}

export { renderPagination };
