//createElement('div')
//createElement("span" , "Hello world")
//createElement('div', [ul] )
//createElement('input' , {type : 'text'}])

export const createElement = (tagName, ...options) => {
  const element = document.createElement(tagName);
  for (let item of options) {
    if (Array.isArray(item)) {
      appendChildren(item, element);

    } else if (typeof item === "object") {

      for (var key in item) {
        let value = item[key];
        element[key] = value;
      }

    } else {
      element.innerText = item;
    }
  }

  //   if (Array.isArray(textOrElements)) {
  //     appendChildren(textOrElements, element);
  //   } else {
  //     element.innerText = textOrElements;
  //   }

  //   for (var key in attributes) {
  //     let value = attributes[key];d
  //     element[key] = value;
  //   }

  return element;
};

const appendChildren = (elements, domElement) => {
  for (let i = 0; i < elements.length; i++) {
    domElement.append(elements[i]);
  }
};
