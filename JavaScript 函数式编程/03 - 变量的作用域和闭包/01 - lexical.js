const a = 'outer';

function fn() {
  const a = 'middle';

  return [1, 2, 3].map(function(n) {
    const a = 'in';

    return [a, n];
  })
}

console.log(fn());