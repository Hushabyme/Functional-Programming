const isNumber = value => typeof value === 'number';
const multiply = (a, b) => a + b;

function add(array1, array2) {
  return array1
    .concat(array2)
    .filter(n => isNumber(n))
    .reduce(multiply, 0)
}

console.log(add([1, 2, 'a'], ['b', 3]));


