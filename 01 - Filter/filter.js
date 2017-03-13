/*
*
* Filter
* 
*/

// 在 JavaScript 或者其他的语言中，都是一定拥有函数这个概念
// 但并不是所有的编程语言都如 JavaScript 这般可以将函数赋值作为变量使用变量

// 在 JavaScript 中，函数 = 值
// Function = value;

// 比如我们实现下面这个例子:

function triple(x) {
  return x * 3;
}
triple(3); // 9

// 向上面这样的函数我们肯定一点都不会陌生，我们也都知道，它可以作为值来传递

// 像这样:

const triple_1 = function (x) {
  return x * 3;
};

// 甚至，我们可以像下面这样将其再传递给另一个值
const triple_2 = triple_1;
triple_2(3);  // 9

// 那么高阶函数有什么好处呢？我们为什么要使用它？

// 1. 首先就是组合(composition),我们可以将函数拆分成一个一个的小函数，再将其组装成一个大函数
// 也就是我最常说的 —— 一个函数只做且只做好一件事

/*
 首先我们再看一个例子吧,以下的例子是为了筛选出所有动物中的狗狗
*/

const animals = [
  { name: 'Alice',   species: 'rabbit' },
  { name: 'Bob',     species: 'dog' },
  { name: 'Cherry',  species: 'dog' },
  { name: 'David',   species: 'fish' },
  { name: 'Ella',    species: 'cat' },
  { name: 'Fair',    species: 'fish' },
];

// 接下来我们使用大家初学时最爱使用的 for 循环来解决这个问题:

/*
 const dogs = [];
 for(let i = 0; i < animals.length; i++) {
  if(animals[i].species === 'dog') {
    dogs.push(animals[i])
  }
 }
 console.log(dogs);
*/

// 很显然以上的函数是没有问题的，但是我们可以使用 ES5 中的 filter 来重构它，因为它看起来太过于复杂和冗长

/*
 const dogs = animals.filter( animal => {
  return animal.species === 'dog';
 });
 console.log(dogs);
*/

// 很棒！如果能想到这一步并且把它写出来

/*
*
* 但是，我们必须要考虑一个问题，那就是在我们的企业级开发之中，难道就仅仅为了筛选 dog 吗？
* 这个函数很好用，我们可不可以把它抽象出来，然后在别的地方复用呢？
* 在函数式编程中，"代码抽象" 是我们必须要做的一步，也是很难处理的一个步骤
*
*/

// 比如上面的代码，我们可以将我们需要的部分抽象出来

const isDog = function (animal) {
  return animal.species === 'dog';
};

const dogs = animals.filter(isDog);
console.log(dogs);

// 此时，我们就将上面的代码分离了出来，假如下次我们需要筛选我们的兔子，我们就可以这样做:

const isRabbit = function (animal) {
  return animal.species === 'rabbit';
};
const rabbits = animals.filter(isRabbit);
console.log(rabbits);

// 当然，以上的代码抽象程度没有那么高，这里只是举出一个例子来告诉你，一个函数做且只做好一件事这个道理

