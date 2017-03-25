# 第四章 高阶函数

## 4.1 以其它函数为参数的函数

还记得我们第二章讲到的 filter() 函数吗？那就是一个高阶函数。

假如现在，我们想要一个函数，用于返回数组中最大的数，我们应该怎么做呢？

```javascript
const max = value => Math.max(...value);

const find = (array, math) => {
  return math(array);
};

find([1, 2, 3, 4], max);  // 4
```

你也许会奇怪，为什么我这里要定义一个 `find` 函数呢？还记得我们第一章所说的吗？函数式编程最重要的是抽象和函数组合。

假如我们现在又有需求，需要找到最小值呢？需要将这些值相加呢？需要将值相乘呢？那么我们只需定义其它函数就可以了，而对 `find` 函数没有任何“副作用”，这也是函数式编程中很重要的思想，函数不能有副作用，输入什么值就会输出什么值，比如 `1 + 1 = 2 ` 而不是以字符串表示的 '2'。

```javascript
const min = value => Math.min(...value);

const multiply = (a, b) => a + b;

const reduce = array => array.reduce(multiply, 0);
```

以上，我们又定义了几个函数，发现了吗，这些函数都是单独独立的，与 `find` 函数毫无关系。

当我们需要使用的时候，进行组合就可以了：

```javascript
find([1, 2, 3], min);  // 1
find([1, 2, 3], reduce);  // 6
```

不知道你学会了吗？我们要学习思想，思想是前进的唯一动力，仿写和抄袭代码会让你变得更熟练，但不会让你变成大师。

**这也是为什么大师会悟道，而高手只会学习武功秘籍。**

## 4.2 返回其它函数的函数

高级函数的参数是用于**“配置”**返回的函数的行为的。

比如下面的例子：

```javascript
const add = function (x) {
  return function (y) {
    return x + y;
  }
};

const add100 = add(100);

const add50 = add100(50);

console.log(add50);  // 150
```

上面的函数，我们可以叫它为 **“柯里化(currying)” **。但是这里先不涉及它的概念。

我么可以看到，第一次我们传入的 `x` 的值为 100，将其作为一个值再传给了 `add50` 函数。也就是说，我们未来不论传入任何值，`add100` 的值都是 100，还记得我说的吗，函数是不能有副作用的。我们再用平常的写法写一遍：

```javascript
function add(a, b) {
  return a + b;
}
add(100, 50);  // 150
```

没有什么问题，不用担心我会在这里挖什么坑。

相信你会认为上面的函数式写法更不方便对吧。那么，我们就来看看到底它有什么好处。

假设，你要实现生成一个随机字符串的方法：

```javascript
// 这里的 36 表示 36 进制，支持 2 ~ 36 进制
const randomStr = length => Math.random().toString(36).substring(2, length);

randomStr(10);  // y650pn90
```

假如现在我改需求了，我要生成有固定的前缀的字符串怎么办，好吧，我改...

```javascript
const prefixStr = (prefix, length = 10) => {
  return [prefix, Math.random().toString(36).substring(2, length)].join('');
};

prefixStr('Hello-', 8);  // Hello-pga6y2
```

没问题，但是。。。你没有发现，这里好像是不是重复了呀！这不符合我们对函数解耦的观念，改改改！

```javascript
function prefixRandomStr(length) {
  return function (prefix) {
    return [prefix, Math.random().toString(36).substring(2, length)].join('');
  }
}

const randomString = prefixRandomStr(10);
randomString();  // uf65je7i

const prefix = randomString('I-love-');
prefix;  // I-love-lw4f5af6
```

这样，我们就实现了函数的解耦和分离功能。

你会发现，我们上面的函数返回的结果是不一样的对吧，不对那就对了！这样，当我们需要前面的函数，就可以只运行前面的函数，而需要加上前缀的时候，我们再调用高阶函数中的另一个函数就可以了。

这里再穿插一个函数式编程中的概念 —— **一个拥有可变状态的函数具有潜在的危险，我们应该尽量避免创建和使用它。**

# 总结

本节我们讲了函数式编程中非常重要的概念之一 —— 高阶函数。

我们不仅讲了怎么使用它，更重要的是要学会为什么要使用它，以及在什么情况下，我们最好使用高阶函数。