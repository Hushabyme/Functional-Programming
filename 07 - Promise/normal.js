// 一般来说，我们想要加载一张图片，我们会构建下面的函数

function loadImage(url, width, height) {
  const img = new Image();

  img.onload = function () {
    let image = document.createElement('img');

    image.src = img.src;

    document.body.appendChild(image);

    image.style.width = width + 'px';
    image.style.height = height + 'px';
  };

  img.onerror = function () {
    const message = `Could not load this image at ${url}`;
    callback(new Error(message));
  };

  img.src = url;
}

loadImage('images/1.jpg', 360, 500);

// 此时，我们的图片就加载到了页面中

// 那么，这是有一个问题出现了，如果我们要加载多张图片呢？我们当然还是可以使用这个函数，然后写入 callback
// 接着，当一张图片加载完后，再去加载另一张图片，或者就直接多写几个函数

// 就像这样:
loadImage('images/2.jpg', 360, 500);
loadImage('images/3.jpg', 360, 500);

// 但是，这样的写法，我们会写出大量冗长的代码，这时候，ES6 中的 Promise() 对象就给我们提供这种函数式地写法
