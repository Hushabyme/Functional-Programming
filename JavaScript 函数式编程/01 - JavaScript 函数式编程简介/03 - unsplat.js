function unsplat(fn) {
  return (...args) => fn.call(null, args);
}

const joinElement = unsplat(args => args.join(' '));

console.log(joinElement(1, 2, 3));  // 1 2 3
console.log(joinElement('a', 'b', 'c'));  // a b c