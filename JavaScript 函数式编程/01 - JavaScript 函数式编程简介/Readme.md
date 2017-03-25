# 第一章 JavaScript函数式编程简介

## 1.1 JavaScript 案例

我们为什么要选择 JavaScript 来编程？就是因为它的灵活。

如果我们对函数式编程有过了解的话，我们就知道 ECMAScript 5 中 Array 有很多原型方法，例如 map、forEach、filter......，这些都属于函数式编程。也就是说，JavaScript “天生”就支持函数式编程。

```javascript
[1, 2, 3].forEach(n => {
  console.log(n * n);
});
// 1
// 4
// 9
```

再举一个小例子，所有的 JavaScript 函数都有一个 `apply` 方法，它使得我们可以用一个数组来调用函数，其中，数组的元素作为函数的参数。我们就来使用它，创建一个名为 `splat` 的函数，它接收一个参数 `fn`，并返回另一个函数，这样一来，传入函数 `splat ` 的数组的元素就是函数 `fn` 的参数：

```javascript
function splat(fn) {
  return function (array) {
    return fn.apply(null, array);
  };
}

const addArrayElements = splat((x, y) => x + y);

addArrayElements([1, 2]); // 3
```

这就是我们函数式编程的初试 —— 一个返回函数的函数。

需要注意的是，`apply` 仅仅是它实现函数式编程的一种方法而已。

我们再举一个例子，它和 `splat` 不同，它返回的函数接收任意多个参数来调用任意一个函数，姑且就叫做 `unsplat` 吧。

```javascript
function unsplat(fn) {
  return (...args) => fn.call(null, args);
}

const joinElement = unsplat(args => args.join(' '));

joinElement(1, 2, 3);  // 1 2 3
joinElement('a', 'b', 'c');  // a b c
```

尽管 JavaScript 还在发展之中，2017 年就要出 ES7 规范了，众望所归的 async/await 就要来了，但是，浏览器支持上来说，依旧是不尽人意的，即使最新的 Node.js 已经支持了。

从前 JavaScript 被人所诟病的就是因为它就是一个浏览器中的“玩具”罢了，由于不支持模块，只能使用 IIFE 和全局变量，让人觉得它不是一门好语言，但 ES6 规范中的块级作用域和 import/export 使其拥有了模块化的功能，但现如今，还是需要使用 bable 来进行编译。

但尽管如此，本教程还是要带你领略 JavaScript 容易理解和测试的 —— 函数式编程。

# 1.2 开始函数式编程

我们可以使用一句直白的话来描述函数式编程：

> 函数式编程通过使用函数来将值转换成抽象单元，接着用于构建软件系统。

那么为什么函数式编程很重要呢？或者说，我么为什么要学习这种看起来很难理解的写法呢？我们熟悉面向对象的思想，我们就明白它的主要目的就是问题的分解，将我们面临的问题分解为一个又一个的部件，最终再将它们组装起来，形成更大的部件。

面向对象系统：

![面向对象系统](C:\Users\Haoran\Desktop\1.png)

函数式编程系统：

![函数式编程系统](C:\Users\Haoran\Desktop\2.png)

你可以看出其中的差异来吗？

简单的来说，面向对象的系统是将问题分解成不同的**“名词”**或对象，函数式的方法是将问题分解为多组的**“动词”**或函数。当然，它们同样地都是使用 **组合** 的方式构建更大的函数或者系统。