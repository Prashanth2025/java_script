let arr = [2, 3, 34, 10, 15, 35];
let filteredArr = arr.filter((ele) => {
  return ele % 2 != 0;
});
console.log(filteredArr);
