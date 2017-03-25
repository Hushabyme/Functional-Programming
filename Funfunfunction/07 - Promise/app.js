// 这里是为了创造回调，造成 "回调地狱"
// 这里只写了 3 个图片，但是已经很难看了，这么多行代码

// 加载图片
const loadImage = function (url, callback) {
  const img = new Image();

  img.onload = function () {
    callback(null, img)
  };

  img.onerror = function () {
    const message = `Could not load this image at ${url}`;
    callback(new Error(message));
  };

  img.src = url;
};

// 渲染图片
const addImg = function (src) {
  const image = document.createElement('img');

  image.src = src;

  document.body.appendChild(image);
};

// 写入图片
loadImage('images/1.jpg', (error, img1) => {
  addImg(img1.src);
  loadImage('images/2.jpg', (error, img2) => {
    addImg(img2.src);
    loadImage('images/3.jpg', (error, img3) => {
      addImg(img3.src);
    })
  })
});

// 以上代码理解起来上有困难，更别提想要写出来拓展性强的代码来了
