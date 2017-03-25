const add = function (x) {
  return function (y) {
    return x + y;
  }
};

const add100 = add(100);

const add50 = add100(50);

console.log(add50);