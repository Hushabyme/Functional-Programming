function add(x, y) {
  return x + y;
}

console.log(add('1', 2));  // 12

function addTwo(x, y) {
  x = +x;
  y = +y;

  return x + y;
}

console.log(addTwo('1', 2));


