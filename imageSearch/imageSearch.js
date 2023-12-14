export default   getImageSize = (imageUrl) => {
  const image = document.createElement("img");

  return new Promise(function (resolve, reject) {
    image.onload = function () {
      resolve(image);
    };
    image.src = imageUrl;
  });
};


