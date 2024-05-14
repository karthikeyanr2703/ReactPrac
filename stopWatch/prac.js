let arr = [2, 4, 6, 8, 10];

let newArr = arr.map((num) => {
  return num * 2;
});
console.log(newArr);

let fruits = ['apple','mango','banana'];

let newFruits = fruits.map((fruit) => {
    return (`<div>${fruit}</div>`)
})
console.log(newFruits);


let numbers = [ 1,2,2,3,4,5,4];
 
let noDuplicateNums = numbers.filter((num,index,array) => {
    return array.indexOf(num) === index
})
console.log(noDuplicateNums);