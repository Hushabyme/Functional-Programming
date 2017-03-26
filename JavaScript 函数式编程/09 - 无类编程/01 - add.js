const isNumber = value => typeof value === 'number';
const isString = value => typeof value === 'string';

function add(value1, value2) {
  if(isNumber(value1) && isNumber(value2)) {
    return value1 + value2;
  } else if (isString(value1) && isString(value2)) {
    return +value1 + +value2;
  } else if(Array.isArray(value1) && Array.isArray(value2)) {
    return +value1[0] + +value2[0]
  }
}

console.log(add('1', '2'));
console.log(add(1, 2));
console.log(add([1], ['2']));