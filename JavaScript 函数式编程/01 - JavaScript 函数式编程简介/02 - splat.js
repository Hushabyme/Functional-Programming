function splat(fn) {
  return function (array) {
    return fn.apply(null, array);
  };
}

const addArrayElements = splat((x, y) => x + y);

console.log(addArrayElements([1, 2])); // 3