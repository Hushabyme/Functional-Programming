/*
*
* Reduce 高级用法
*
*/

// 我们想要将 txt 文件中使用 tab 进行缩进的一般字符串转换成 JSON 数据格式

const fs = require('fs');

const output = fs.readFileSync('data.txt', 'utf-8')
  .trim()
  .split('\n')
  .map((line) => line.split('\t'))
  .reduce((customs, line) => {
      customs[line[0]] = customs[line[0]] || [];
      customs[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
      });

    return customs;
  }, {});
﻿
console.log('output', JSON.stringify(output, null, 2));

// 最后，我们得到了如下的数据:
/*
output {
  "mark johansson": [
    {
      "name": "waffle",
      "price": "iron",
      "quantity": "80"
    },
    {
      "name": "blender",
      "price": "200",
      "quantity": "1"
    },
    {
      "name": "knife",
      "price": "iron",
      "quantity": "80"
    }
  ],
    "Nikita Smith": [
    {
      "name": "waffle",
      "price": "iron",
      "quantity": "80"
    },
    {
      "name": "knife",
      "price": "10",
      "quantity": "2"
    },
    {
      "name": "pot",
      "price": "20",
      "quantity": "3"
    }
  ]
}
*/