function zip(array1, array2) {
  const length1 = array1.length;
  const length2 = array2.length;
  if(length1 !== length2) return;

  const result = [];
  let i = -1;

  while (++i < length1) {
    result[i] = [array1[i], array2[i]];
  }

  return result;
}
console.log(zip(['a', 'b', 'c'], [1, 2, 3]));  // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
