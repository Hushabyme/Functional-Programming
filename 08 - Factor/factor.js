// 本小节讲的是什么？就是简单的告诉你，函数分离和组合的思想，以及构建可复用的函数

// 我们先来看一个例子，假如我们要实现一个函数 fn([1, 2]) -> [2, 3]
// 你会怎么做呢？

// 如果你想到了 for 循环。。那我们就来动手实现吧...

const arrayAdd = function (arr) {
  if(Array.isArray(arr)) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i] + 1;
    }

    return newArr;
  }
};

const output = arrayAdd([1,2]);
console.log(output); // [2, 3]

// 没错，这就是你不希望看到的难看且很讨厌的代码

// 接下来，我们就用我们所学的函数式编程思想来解决它吧

console.log([1, 2].map(i => i + 1));

// 如果你大呼 WOW！！！ 那么你就应该再好好学习学习，这是我们必要要掌握的，也是为什么现在我们喜欢使用 Array 方法的原因
// 因为它真的很好用

// 接下来来一个有难度的，fn('ABC') -> 'BCD'

// 我们还是先用恶心的写法来一遍吧

const stringAdd = function (str) {
  if(typeof str === 'string') {
    const splitStr = str.split('');
    let newStr = [];

    for(let i = 0; i < splitStr.length; i++) {
      newStr[i] = String.fromCharCode(str[i].charCodeAt(0) + 1);
    }

    return newStr.join('');
  }
};

console.log(stringAdd('ABC'));  // BCD

// 不瞒你说，我现在已经疯了，写了这么一长串难看且晦涩的代码

// 来吧，重构！

const stringAdd1 = str => {
  return str
    .split('')
    .map(s => String.fromCharCode(s.charCodeAt(0) + 1))
    .join('')
};
console.log(stringAdd1('BCD')); // CDE

// 清爽！舒服！

// 但是，等等？！ String.fromCharCode(s.charCodeAt(0) + 1)
// 这么一长串的代码是什么鬼？不准你污染我可爱的代码！

// 重构！重构！重构！

// 但是我们怎么重构代码呢？

/*
  重点就是分离代码功能！
*/

// 我们可以将 String.fromCharCode 的功能提出来
const stringChar = function (char) {
  return String.fromCharCode((char.charCodeAt(0) + 1));
};

// 最后的完成品如下，是不是很舒服看起来？
const stringAdd2 = (str, fn) => {
  return str
    .split('')
    .map(i => fn(i))
    .join('')
};

console.log(stringAdd2('DEF', stringChar)); // EGF

// 当然，这并不代表什么函数都应该分离成小代码，要视需求而定
// 当你觉得一个函数变得很臃肿、代码量很多、有很多功能可以重用的时候，此时就是你分离代码的好时机

// 本文中所谈到的 factor 也就是 "因素"，指的就是分离代码的因素
