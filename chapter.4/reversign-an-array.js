function Reverse(array) {
  let newArr = [];
  for(let i = array.length - 1;i >= 0;i--) {
    newArr.push(array[i]);
  }
  return newArr 
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(Reverse([1,2,3,4,5,6,7,8,9]))
console.log(reverseArrayInPlace([1,2,3,4,5,6]))
