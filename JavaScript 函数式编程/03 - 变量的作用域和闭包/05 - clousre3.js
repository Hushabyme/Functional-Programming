function closure(a) {
  return function(b) {
    return a + b;
  }
}

console.log(closure(1)(2));