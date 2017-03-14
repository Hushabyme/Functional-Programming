// Promise 也是目前最流行，也是必须要掌握的方法

// 我们使用 Promise 来重构我们 app.js 中的方法，对比来看，就能发现它的妙处
// 如果你没有学过 Promise，那么希望你好好的搜索一下关于它的信息

const loadImage = function (url) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function () {
      const message = `Could not load this image at ${url}`;
      reject(new Error(message));
    };

    image.src = url;
  })
};

const addImg = function (src) {
  const image = document.createElement('img');

  image.src = src;

  document.body.appendChild(image);
};

Promise.all([
  loadImage('images/1.jpg'),
  loadImage('images/2.jpg'),
  loadImage('images/3.jpg'),
]).then((images) => {
  // 在控制台找到 src 属性，像这样:
  // "http://localhost:63342/Functional_programming/07%20-%20Promise/images/1.jpg"
  console.log(images);
  // 接着我们就使用我们的函数式编程方法来输出
  images.forEach(image => addImg(image.src))
}).catch( err => {
  // 处理错误情况
});

// dang dang dang! 我们同样完成了我们的任务
// 而且我们的代码量以及可理解、可扩展性大大增强了！这样，我要添加 100 张图片，也不过是在 Promise.all 的数组中 push 图片地址而已