# 第三章 变量的作用域和闭包

## 3.1 全局作用域

全局作用域相信大家都知道，它是 JavaScript 被设计出来最被人所诟病的一个地方。

在 ES6 之前，我们如果定义一个变量而不使用 `var` 关键字的话，那么它就会变成全局作用域中的一员，那么它的坏处在哪里呢？

主要有以下两点：

1. 全局作用域中的变量贯穿整个生命周期，无论你是否用到它，它都不会被垃圾回收器(GC)回收，从而造成大量的内存浪费。
2. 它会被任意修改，比如 `name = 'a'`，假如我现在在不知道的情况下修改了它，`name = 'b'`，那么，事先定义的 `name` 变量就会被修改，接着，程序就会发生你意想不到的问题。

当然，现在，我们还是提倡使用 `let/const` 来定义变量，不使用 `var` 的原因就在于它的变量提升让人抓不着头脑，在函数中，无论你在哪里定义它，它都会跑到函数的最上面，比如 for 循环中的 `var i = 0` 其实根本不在 for 循环中，而是 `var i = 0; for(i)`。

假如我们使用 setTimeOut 呢？面试题中经常会出现这么一个问题：

```javascript
for(vai i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i)
  },1000)
}
// 答案是输出 5 个 4
```

如果我们将 `var` 修改成 `let` 后，就不一样了，将会输出 `0 1 2 3 4`。

## 3.2 词法作用域

>  词法作用域是指一个变量的可见性，及其文本表述的模拟值。

比如下面的例子：

```javascript
const a = 'outer';

function fn() {
  const a = 'middle';
  
  return [1, 2, 3].map(function(n) {
    const a = 'in';
    
    return [a, n];
  })
}
```

毫无疑问，答案是：

```javascript
[ [ 'in', 1 ], [ 'in', 2 ], [ 'in', 3 ] ]
```

为什么呢？这就是词法作用域的威力，它可以将变量保存在某一个特定的作用域之中，而外面的变量是访问不了内部的作用域的。

我知道，此时，你会想到 **闭包** 。因为它正好相反，内层的函数可以访问到外层的变量。不要着急，我们等等会讲到的。

## 3.3 动态作用域

JavaScript 中的动态作用域的概念想必大家都了解，但却又爱又恨。对于新手来说 `this` 的指向永远是一个谜，因为你也不知道它最终指向了哪里。

一般来说，`this` 的指向有四种形式：

1. 默认的 this 指向全局作用域。

   ```javascript
   const a = 1;
   const g = () => this.a;  // undefined
   // 如果是 var 那么就是 1
   ```

2. 对象中的 this 指向对象中的某一个属性。

   ```javascript
   const obj = {
     a: 2,
     fn() {
       return this.a
     }
   };
   obj.fn();  // 2
   ```

3. call/apply 中的 this 指向被调用的函数

   ```javascript
   // 借用上面的 obj
   const obj1 = {
     a: 3
   };
   obj.fn.call(obj1);  // 3
   ```

4. 构造函数中的 this 指向构造函数的实例

   ```javascript
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
   person.isAge();  // 22
   ```

   ​

现在，我们又重新复习了一遍 `this` 的指向问题，这次一定要好好理解了。

## 3.4 函数作用域

JavaScript 中最为重要的要数函数作用域了。当然，说道函数作用域，我们不得不提到闭包的概念。

闭包其实是一个很简单的概念：

```javascript
function closure() {
  const a = 1;

  return function () {
    return a;
  }
}
closure()();  // 1
```

我们上面提到了词法作用域，按理来说，我们后面的函数是不应该返回 1，而是 undefined 才对呀？关键的关键在于 **作用域链(Scope)** 这个概念。

为什么我们上面的词法作用域 a = 'in' 呢？那是因为在该函数的作用域中包含一个 `a` 变量；而作用域链的概念是表示，当该作用域中没有此变量时，它会向上一级作用域中查找此变量，如果上一层依然没有，那么再向更上一层查找......直到找到为止，如果在全局作用域中还没有找到的话，就会返回 undefined。

为了验证我们的说法，我们将上面的函数修改一下：

```javascript
const a = 1;

function trail() {
  return function trail1() {
    return function trail2() {
      return a;
    }
  }
}
trail()()();  // 1
```

在这个函数中，我们嵌套了这么多层，但是依然找到了变量 `a`，说明确实是作用域链在起作用。

闭包的另一种用法很重要，也是我们平时最经常使用到的：

```javascript
function closure(a) {
  return function(b) {
    return a + b;
  }
}
closure(1)(2);  // 3
```

在上面的函数中，虽然内层函数并没有 `a` 这个参数，但是却也可以访问到外层的参数 `a` ，这就是闭包的一个重要性质 —— *内层作用域访问外层作用域*。当然，我们也可以认为是外层的函数可以“看到”内层函数的参数，这并不重要。

另外，也有一个很重要的用法，我们可以称其为**“遮蔽”(shadowing)**。

在 JavaScript 的变量创建中，我们知道后面定义的变量会覆盖前面的变量：

```javascript
let a = 1;
let a = 2;
console.log(a);  // 2
```

在闭包中，也会发生这样的情况：

```javascript
function shadowing(shadow) {
  return function(shadow) {
    return shadow + 1
  }
}
const one = shadowing(1);
one(2);  // 3
```

输出的结果是 3 而不是 2。

因此：**在定义闭包函数的时候，不要使用同一个参数！**

# 总结

这一节算是过渡的一节吧，我们重新将 JavaScript 中非常重要的知识再次拿出来讲了一遍，希望你有收货。

我们下一节的高级函数很多时候都需要与变量作用域和闭包密切相关，所以你还是不太清楚的话，最好 Google 一下，寻找你要的答案。