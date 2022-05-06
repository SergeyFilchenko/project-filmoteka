function divideOnPages(arrayOfId, perPageAmount) {
  const pageAmount = Math.ceil(arrayOfId.length / perPageAmount);
  let result = [];
  let start = 1;
  for (let i = 1; i <= pageAmount; i += 1) {
    result[i - 1] = arrayOfId.splice(start - 1, perPageAmount * start);
    start += perPageAmount;
  }
  return result;
  //функция которая принимает массив id (в частности из localStorage)
  //и возвращает двухмерный массив
}
//для примера
//[1,2,3,4,5,6,7,8,9,10,11,12] - arrayOfId, perPageAmount - 4    - входящие параметры

//на выходе должны получить двухмерный массив
//[0]=[1,2,3,4]
//[1]=[5,6,7,8]
//[2]=[9,10,11,12]

export { divideOnPages };
