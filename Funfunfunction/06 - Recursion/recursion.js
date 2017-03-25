/*
 *
 * Recursion
 *
*/

// 什么是递归？很简单的解释，就是 一个函数递归的调用自己

// 我们先来看我们平时会用到的 for 循环吧

/*
const countdown = num => {
  for(let i = 0; i < num; num--) {
    console.log(num);
  }
};

countdown(10);
*/

// 以上会输出 10 -> 1 ，没错，但是我们现在使用递归来进行它

const countdown = num => {
  if(num === 0) return;
  console.log(num);

  countdown(num - 1);
};
countdown(10);

// 我们也可以得到同样的结果

// 接下来我们再来一个例子吧

// 此时，我们拥有一个 database，它表示动物之间的层级关系
// 但是，这样看起来不够清晰，我们希望让他们的关系像文件夹一样，父级到子级的层级关系

const categories = [
  { 'id': 'animals', 'parent': null },
  { 'id': 'mammals', 'parent': 'animals' },
  { 'id': 'cats', 'parent': 'mammals' },
  { 'id': 'dogs', 'parent': 'mammals' },
  { 'id': 'chihuahua', 'parent': 'dogs' },
  { 'id': 'persian', 'parent': 'cats' },
  { 'id': 'siamese', 'parent': 'cats' },
];

const makeTree = function (categories, parent) {
  let node = {};

  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id));

  return node;
};

console.log(
  JSON.stringify(makeTree(categories, null), null, 2)
);

// 最后，我们得到了如下的 JSON 数据
/*
{
  "animals": {
    "mammals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {}
      }
    }
  }
}
*/


// 如果你看懂了以上的代码，那么你差不多就理解为什么要使用递归而不是 for 循环了
// 不信？那就尝试使用 for 循环来达到同样的效果