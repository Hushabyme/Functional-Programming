function closure() {
  const a = 1;

  return function () {
    return a;
  }
}

console.log(closure()());