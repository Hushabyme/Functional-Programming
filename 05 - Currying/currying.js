/*
*
* Currying
*
*/

const dragon =
  name =>
    size =>
      element =>
        `${name} is a ${size} dragon that breathes ${element} !`;

const output = dragon('Alice')('large')('ice');

console.log(output); // Alice is a large dragon that breathes ice !

// 那么，如果不是柯里化的函数呢？

const dragon_1 = function (name, size, element) {
  return `${name} is a ${size} dragon that breathes ${element} !`;
};

const output_1 = dragon_1('Bob', 'small', 'light');
console.log(output_1);  // Bob is a small dragon that breathes light !

// 其实如果我们单看这两个函数，是没有什么分别的，只不过前面的看起来比较舒服和清晰而已

// 那么 "函数柯里化" 究竟有什么好处呢？

// 个人认为这个 currying 是由于最起初的函数式编程留下来，而不是为了学习它而学习它
// 在函数式编程中，函数都是必须 currying 的，因为最开始的函数式编程就是用来进行数学计算的
// 在现代的编程中，逐渐引入了这么一种编程模式，对新手不是特别的友好，但是无所谓，我们学习就是为了学习自己不会的知识嘛




