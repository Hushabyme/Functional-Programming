// 第一种情况
const a = 1;

const g = () => this.a;
console.log(g());  // undefined

// 第二种情况
const obj = {
  a: 2,
  fn() {
    return this.a
  }
};
console.log(obj.fn());  // 2

// 第三种情况
const obj1 = {
  a: 3
};
console.log(obj.fn.call(obj1));  // 3

// 第四种情况
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isAge() {
    return this.age;
  }
}

const person = new Person('Alice', 22);
console.log(person.isAge());  // 22