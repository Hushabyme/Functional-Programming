function fact(n) {
  return n <= 0 ? 1 : n * fact(n - 1);
}

console.log(fact(5));  // 120