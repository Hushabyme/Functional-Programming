# 第八章 基于流的编程

## 8.1 链式调用

如果你使用过 jQuery，那么你一定对链式调用很喜欢吧。

在 JavaScript 内置的 Array.prototype 方法，都是可以链式调用的。

我这里举一个例子，现在假设我们要筛选出两个个数组中的数字，然后输出它们的和：

> ```javascript
> add([1, 2, 'a'], ['b', 3]) ==> 6
> ```

这时，我们就可以用上前面我们所学到的方法啦：

```javascript
const isNumber = value => typeof value === 'number';
const multiply = (a, b) => a + b;

function add(array1, array2) {
  return array1
    .concat(array2)
    .filter(n => isNumber(n))
    .reduce(multiply, 0)
}

console.log(add([1, 2, 'a'], ['b', 3]));
```

看到了吗？这就是链式调用的实践，我们应当多多使用 Array 提供的原生的链式调用的方法，这会省去我们不少的烦恼。

## 8.2 惰性函数

惰性函数，其实和函数式编程关系不大，不属于函数式编程中的概念，但是看到了，这里就提一下吧：

我们看过的《JavaScript 高级程序设计》中有关跨浏览器的 addEventListener() 中的代码：

```javascript
function addEvent (type, element, fun) {
    if (element.addEventListener) {
        element.addEventListener(type, fun, false);
    }
    else if(element.attachEvent){
        element.attachEvent('on' + type, fun);
    }
    else{
        element['on' + type] = fun;
    }
}
```

尽管现如今我们很少去兼容低级浏览器了，但是这种方法我们必须要学会，那就是惰性函数的思想。

> 惰性函数表示函数执行的分支只会在函数第一次调用时执行。在第一次调用过程中，该函数会被覆盖为另一个按照合适方式执行的函数，这样任何对原函数的调用就不用再经过执行的分支了

我们使用惰性函数来重写上面的函数，因为每一次调用时，它都会执行一次判断，这会减慢程序运行的时间：

```javascript
function addEvent (type, element, fun) {
    if (element.addEventListener) {
        addEvent = function (type, element, fun) {
            element.addEventListener(type, fun, false);
        }
    } else if(element.attachEvent){
        addEvent = function (type, element, fun) {
            element.attachEvent('on' + type, fun);
        }
    } else{
        addEvent = function (type, element, fun) {
            element['on' + type] = fun;
        }
    }
    return addEvent(type, element, fun);
}
```

注意到了吗？当该函数执行的时候，无论在哪一个浏览器中，都只会执行一次。执行完以后将会记住该函数，使用其中可以使用的函数来替代原函数，这样就不需要每一次使用该函数时都进行判断了。

