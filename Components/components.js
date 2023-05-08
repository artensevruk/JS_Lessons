import { createElement } from "../domUtils.js";

export const input = () => {
  const input = createElement("input", { value: "default text" });
  return input;
};

export const list = (items) => {
  const childElements = items.map((item) => createElement("li", item));
  const list = createElement("ul", childElements);

  //   for(let i = 0 ; i < items.length ; i++){
  //     const listElement =createElement("li");
  //     list.append(listElement);
  //     listElement.innerText = items[i];
  //   }

  // items.forEach(element => {
  //     const listElement =createElement("li");
  //     list.append(listElement);
  //     listElement.innerText = element;
  // });
  return list;
};

export const headerList = (title, items) => {
  return createElement("div", [createElement("h1", title), list(items)]);
};

export const counter = (count = 0) => {
  const countSpan = createElement("span", count);

  const getHandler = (delta) => () => {
    count += delta;
    countSpan.innerText = count;
  };

  return createElement("div", [
    createElement("button", "+", {
      id: "Boo",
      className: "Boo",
      onclick: getHandler(1),
    }),
    countSpan,
    createElement("button", "-", { onclick: getHandler(-1) }),
  ]);
};
