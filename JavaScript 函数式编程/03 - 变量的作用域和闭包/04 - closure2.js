const a = 1;

function trail() {
  return function trail1() {
    return function trail2() {
      return a;
    }
  }
}

console.trace(trail()()());