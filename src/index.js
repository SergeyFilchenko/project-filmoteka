import './sass/main.scss';
import './js/api/api-service';
import './js/base/spiner';
import { updateInterface } from './js/base/update';
import './js/base/listeners';
import { divideOnPages } from './js/utils/devideOnPages';

updateInterface();

console.log(divideOnPages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4));
