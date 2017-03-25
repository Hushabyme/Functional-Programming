# 第二章 一等函数与 Applicative 编程

## 2.1 函数是一等公民 

在 JavaScript 中，函数就是一等公民。

- 函数与数字一样，可以存储为变量

```javascript
const fortytwo = () => 42;
```

- 函数可以与数字一样存储为数组的一个元素

```javascript
const fortytwo = [42, () => 42];
```

- 函数与数字一样可以存储为对象的成员之一

```javascript
const fortytwo = {
  number: 42,
  fn() {
    return 42;
  }
}
```

- 函数与数字一样，可以被传递给另一个函数

```javascript
const add = (a, b) => a + b;

add(1, () => 2);  // 当然，它看上去有一些奇怪
```

- 函数与数字一样，可以被另一个函数返回

```javascript
return 42;
return () => 42;
```

其实最后两个函数就是 “高阶函数”。

> 高阶函数应该可以至少满足以下一项操作：
>
> 1. 以一个函数作为参数
> 2. 返回一个函数作为结果

## 2.2 Applicative 函数

何为 Applicative 函数呢？

> Applicative 函数表示函数 A 作为参数提供给参数 B 的函数

概念性的东西我们都不太喜欢，我们亲自动手定义一个就清楚了。

比如我们想要筛选出数组中为 Number 类型的值，我们可以定义下面的函数：

```javascript
const filter = (array, fn) => {
  return array.filter(fn);
};

const isNumber = value => {
  return typeof value === 'number';
};

const arr = ['a', 1, 'b', 2];
filter(arr, isNumber);  // [1, 2]
```

从上面的例子中，我们就可以看出，`isNumber` 作为函数传递给了 `filter`函数做为一个参数判定数值是否为 Number 类型。这就是所谓的 Applicative 函数。

又比如我们使用原生的方法来实现：

```javascript
[1, 2, 3].map(n => n * n);  // [1, 4, 9]
```

其中的 `n => n * n` 就是传递给 map 的 callback，如果我们使用上面的函数形式来写的话，它也就是 Applicative 函数了。就像这样的形式：`map([1, 2, 3], multiply)`，这里就不花时间在写了，你们自己动手来实现一下。

# 总结

本节的内容很少，但是表达的思想却是非常重要的。

本章的重点在于函数是一等公民这个概念。我们可以将函数作为值传递到任何我们需要的地方，这也是为什么我习惯于写函数是使用 **函数表达式** 而不是 **函数声明** 的方式