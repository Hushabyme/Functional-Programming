function deepClone(obj) {
  const result = {};

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const obj = {
  a: 1,
  b: 2
};

const obj_clone = deepClone(obj);

console.log(obj_clone);
console.log(obj_clone === obj);  // false