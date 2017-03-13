/*
 *
 * Reduce
 *
*/

const orders = [
  { amount: 100 },
  { amount: 200 },
  { amount: 300 },
  { amount: 400 },
  { amount: 500 },
];

// 我们想要对其求和，好吧~你们要的 for 循环来了

const total = function (x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += orders[i].amount
  }

  return sum;
};

console.log(total(orders));  // 1500

// 嗯~上面的代码大家相比也都是很眼熟的了，我们接着使用数组中的 reduce() 方法来重构它

const total_1 = orders.reduce((sum, order) => sum + order.amount, 0);
console.log(total_1);

// 这就是函数的强大之处，也是 JavaScript 给我们提供的强大的内置方法