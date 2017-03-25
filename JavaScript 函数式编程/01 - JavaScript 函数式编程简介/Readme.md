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

### 1. 什么是函数式编程

我们可以使用一句直白的话来描述函数式编程：

> 函数式编程通过使用函数来将值转换成抽象单元，接着用于构建软件系统。

那么为什么函数式编程很重要呢？或者说，我么为什么要学习这种看起来很难理解的写法呢？我们熟悉面向对象的思想，我们就明白它的主要目的就是问题的分解，将我们面临的问题分解为一个又一个的部件，最终再将它们组装起来，形成更大的部件。

面向对象系统：

![1](https://github.com/Hushabyme/Functional_programming/blob/master/JavaScript%20%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B/01%20-%20JavaScript%20%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E7%AE%80%E4%BB%8B/img/1.png)

函数式编程系统：

![2](https://github.com/Hushabyme/Functional_programming/blob/master/JavaScript%20%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B/01%20-%20JavaScript%20%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E7%AE%80%E4%BB%8B/img/2.png)

你可以看出其中的差异来吗？

简单的来说，面向对象的系统是将问题分解成不同的“名词”或对象，函数式的方法是将问题分解为多组的“动词”或函数。当然，它们同样地都是使用 **组合** 的方式构建更大的函数或者系统。

JavaScript 同时支持这两种模式，因此，我们不会将它们放在对立面看待。相反，它们还可以混合(mixin)使用。

### 2. 什么是抽象

接着，我们来讲讲什么是“抽象”。

> 抽象方法是指隐藏了实现细节的函数

举一个最简单的例子吧，比如我们想要打印出错误信息。

```javascript
console.log(throw new Error('something wrong'));
```

以上代码没有问题，但是如果我们想要其它的错误信息怎么办？

我们此时可以将错误信息抽象成一个又一个函数

```javascript
const fail = thing => {throw new Error(thing)};

const warn = thing => {console.log(['Waring:', thing].join(' '))};

const note = thing => {console.log(['Note:', thing].join(' '))};
```

这样就一目了然，我们需要哪一个，就可以调用哪一个了。

### 3. 封装和隐藏

多年以来，我们都说，封装是面向对象的基石。

> 在面向对象中，封装是指一种将若干个数据与用来操纵它们的特定操作包装起来的方式。

而 JavaScript 中，封装可以使用一种叫做 **闭包** 的特性来实现，这里先不讲。

### 4.以函数为行为单位

我们使用一个例子就可以说明问题：

```javascript
const str = 'Hello';
str[1];  // e

const arr = [1, 2, 3];
arr[1];  // 2
```

我们可以看出，上面的两个虽然是不同的数据类型，但是都有着共性，因此，我们就可以将其抽象出来形成一个函数：

```javascript
const nth = (value, n) => value[n];

nth([1, 2, 3], 2);  // 3
nth('Hello', 2);  // l
```

但是，假如你传入一个无效的数，就会抛出异常。那么接着，我们需要定义上面的 `n`：

```javascript
const index = (length) => {
  return length >=0 && length < Number.MAX_SAFE_INTEGER && length % 2 === 0;
};

const nth = (value, n) => {
  if(index(n)) return value[n];
};
```

这样，我们就定义了更加健壮的 `nth` 函数，当然，这里没有解决传入的 `n` 为 字符串类型时的情况，如果你感兴趣，也可以自己来创建，现在，我们有了 `nth` 函数，我们就可以再来定义一个 `last` 函数，用于返回传入的值的最后一个元素：

```javascript
const last = value => nth(value, value.length - 1);

last([1, 2, 3, 4]);  // 4
```

你看，我们是不是又在 `nth` 函数的基础之上又构建了一个函数呀，这就是函数式编程的魅力所在，同时也是 `underscore` 和 `lodash` 等函数式编程库的核心思想。

我们再定义一个函数吧，用于区分 `null` 和 `undefined` 与其它数：

```javascript
const existy = value => value != null;
```

使用 `!=` 这种松散类型的写法，就可以区别了，但是如果要区分 `null` 和 `undefined` 怎么办呢？那就再定义两个函数：

```javascript
isUndefined = value => value === undefined;
isNull = value => value === null;
```

不瞒你说，这就是 `lodash` 和 `underscore` 库的源码，不信，你可以去查一查。

没错，这就是函数式编程中最基础的东西 —— *一切都是以函数为基本单位*。

# 总结

函数式编程包括以下技术：

- 确定抽象，并为其构建函数。
- 利用已有的函数来构建更复杂的抽象。
- 通过将现有的函数传给其它的函数来构建更加复杂的抽象。

