 export const createElement = (tagName, textOrElements = null, attributes) => {
  const element = document.createElement(tagName);

  if (Array.isArray(textOrElements)) {
    appendChildren(textOrElements, element);
  } else {
    element.innerText = textOrElements;
  }

  

  for (var key in attributes) {
    let value = attributes[key];
    element[key] = value;
  }

  return element;
};

const appendChildren = (elements, domElement) => {
  for (let i = 0; i < elements.length; i++) {
    domElement.append(elements[i]);
  }
};
