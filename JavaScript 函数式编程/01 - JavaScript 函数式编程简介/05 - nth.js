const index = (length) => {
  return length >=0 && length < Number.MAX_SAFE_INTEGER && length % 2 === 0;
};

const nth = (value, n) => {
  if(index(n)) return value[n];
};

console.log(nth([1, 2, 3], 2));  // 3
console.log(nth('Hello', 2));  // l

const last = value => nth(value, value.length - 1);

console.log(last([1, 2, 3, 4]));