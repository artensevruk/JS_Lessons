const getImage = (imageUrl) => {
  const image = document.createElement("img");

  return new Promise((resolve) => {
    image.onload = () => {
      resolve(image);
    };
    image.src = imageUrl;
  });
};

export {getImage};
