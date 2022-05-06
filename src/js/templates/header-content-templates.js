const homeMarkup = `<form class="header-form js-header-form">
<input class="header-form__input" placeholder="Search films" type="input" name="input" autocomplete="off">
<button class="header-form__btn">
    <svg class="header-form__svg"width="12px" height="12px">
    <use href="./images/svg/header.svg#icon-search"></use>
    </svg>
</button>
</form>`;
const myLibMarkup = `<div class="header-filter">
<button class="header-filter__btn">WATCHED</button>
<button class="header-filter__btn">QUEUE</button>
</div>`;
export { myLibMarkup, homeMarkup };
