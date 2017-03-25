/*
 *
 * Map
 *
*/

// 我们接着上面的话题继续讨论

// 还是这个数组
const animals = [
  { name: 'Alice',   species: 'rabbit' },
  { name: 'Bob',     species: 'dog' },
  { name: 'Cherry',  species: 'dog' },
  { name: 'David',   species: 'fish' },
  { name: 'Ella',    species: 'cat' },
  { name: 'Fair',    species: 'fish' },
];

// 这一次，我们不要求筛选出它的物种了，我们要将它们的名字放入一个数组中输出

// 聪明的人已经想到啦！再来一个 for 循环呗~

/*
 const names = [];
 for(let i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
 }
 console.log(names);
*/

// 完美！但我们可以尝试使用 map() 方法来解决它

const names = animals.map(animal => animal.name);
console.log(names);

// 这才是真正的完美！一行代码就解决了上面的问题

// 其实这就是函数式编程，利用函数来解决我们的问题
// 你可能认为这不就是一个数组的方法嘛，但是如果你不会这样的思路，那么你的代码量将会大大增加
// 并且会造成阅读上的障碍

// 接着我们来点不一样的，我们需要同时输出它们的物种

// 如果使用 for 循环，那么就会非常的恶心，当然我是不想写...

const fullName = animals.map(animal => `${animal.name} is a ${animal.species}`);
console.log(fullName);

// 非常的有趣对吧？
// 如果你真的想学好函数式编程，那么就要一步一步来，不要想着一步登天，好像学会了 Haskell 就会了函数式编程一样
// 函数式编程 是一种思想，以函数为中心的思想，而不是某一种语言特性
// 首先，我们需要将原生的 JavaScript 内置的方法运用熟练，再来思考为什么我们要使用它

// OK，上面的代码我们还可以进行小小的简化

/*
 const names = animals.map(x => x.name);
*/

// 和 for 循环相比，你想使用哪个？