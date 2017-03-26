const obj = {
  a: 1
};

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj1 = deepClone(obj);
obj1.a = 2;
console.log(obj);
console.log(obj1);