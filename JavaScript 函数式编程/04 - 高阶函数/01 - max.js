const max = value => Math.max(...value);

const find = (array, math) => {
  return math(array);
};

console.log(find([1, 2, 3, 4], max));

const min = value => Math.min(...value);

const multiply = (a, b) => a + b;

const reduce = array => array.reduce(multiply, 0);

console.log(find([1, 2, 3], min));  // 1
console.log(find([1, 2, 3], reduce));  // 6