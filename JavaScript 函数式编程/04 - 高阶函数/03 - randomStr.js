const randomStr = length => Math.random().toString(36).substring(2, length);

console.log(randomStr(10));  // y650pn90

const prefixStr = (prefix, length = 10) => {
  return [prefix, Math.random().toString(36).substring(2, length)].join('');
};

console.log(prefixStr('Hello-', 8));  // Hello-pga6y2


function prefixRandomStr(length) {
  return function (prefix) {
    return [prefix, Math.random().toString(36).substring(2, length)].join('');
  }
}
const randomString = prefixRandomStr(10);
console.log(randomString());  // uf65je7i
const prefix = randomString('I-love-');
console.log(prefix);  // I-love-lw4f5af6
