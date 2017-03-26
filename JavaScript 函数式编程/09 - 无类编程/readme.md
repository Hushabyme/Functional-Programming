# 第九章 无类编程

终于到了激动人心的最后一章了，函数式编程的入门就到此为止了，不知道你有没有学会思想呢？

## 9.1 数据导向

还记得我么构建函数使需要考虑的吗？函数式编程的函数就像是一个黑匣子，它不关心你传进来了什么，它只关心你传进来的值应该经过什么样的处理来输出最后的值。

我这里举一个不太好但很形象的例子吧：

```javascript
const isNumber = value => typeof value === 'number';
const isString = value => typeof value === 'string';

function add(value1, value2) {
  if(isNumber(value1) && isNumber(value2)) {
    return value1 + value2;
  } else if (isString(value1) && isString(value2)) {
    return +value1 + +value2;
  }
}

console.log(add('1', '2'));  // 3
console.log(add(1, 2));  // 3
```

如果你喜欢的话，你还可以判断 value 为 Array 类型或者 Object 类型。

这就是我们所说的无类编程，当然，这个例子并不那么形象。

> 所谓无类编程，就是指当你使用函数式接口的时候，中间的数据类型就不那么重要了，从而转为关心计算的开始和结束。

我们再添加一个数组吧：

```javascript
function add(value1, value2) {
  if(isNumber(value1) && isNumber(value2)) {
    return value1 + value2;
  } else if (isString(value1) && isString(value2)) {
    return +value1 + +value2;
  } else if(Array.isArray(value1) && Array.isArray(value2)) {
    return +value1[0] + +value2[0]
  }
}

add([1], ['2']);  // 3
```

为了说明情况，我特定使用了 `add([1], ['2'])` 这样的写法，我们发现，答案还是一样，也就是我们说的数据导向，我关心的是 `1 + 2 = ?` ，具体是使用什么形式传入的，函数说：我表示并不是很关心。

# 总结

到此为止，我们函数式编程的入门就全部结束了。

本教程是根据《JavaScript 函数式编程》来进行创作的，但是由于此书是根据 Underscore 库来写的，对于没有接触过此库的同学来说，看起来很是苦恼。

为此，我进行了二次加工，将其中精华的部分使用了自己的话语来进行阐述，还是那句话，我们追求的是思想，而不是代码复刻。

**就好比我们的数学，一定要理解公式的推倒过程，而不是仅仅学会怎么使用它。**

本教程中所有的例子的源码都在我的 [Github](https://github.com/Hushabyme/Functional-Programming) 中，欢迎下载，也同时十分感谢你的 Star。