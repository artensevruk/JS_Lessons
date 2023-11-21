const list = (items) => {
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

const headerList = (title, items) => {
  return createElement("div", [createElement("h1", title), list(items)]);
};

const counter = (count = 0) => {
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
