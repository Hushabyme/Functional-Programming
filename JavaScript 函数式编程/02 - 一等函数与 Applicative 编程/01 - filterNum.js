const filter = (array, fn) => {
  return array.filter(fn);
};

const isNumber = value => {
  return typeof value === 'number';
};

const arr = ['a', 1, 'b', 2];

console.log(filter(arr, isNumber));