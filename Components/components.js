const list = (items) => {
  const list = createElement("ul");

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

  for (const i of items) {
    const listElement = createElement("li");
    list.append(listElement);
    listElement.innerText = i;
  }

  return list;
};

const headerList = (title, items) => {
  const header = createElement("h1");
  header.innerText = title;
  const wrapper = createElement("div");

  const listComponent = list(items);
  wrapper.append(header, listComponent);
  return wrapper;
};

const counter = (count = 0) => {
  const container = createElement("div");
  const buttonPlus = createElement("button");
  const buttonMinus = createElement("button");
  const countSpan = createElement("span");
  buttonMinus.innerText = "-";
  buttonPlus.innerText = "+";
  countSpan.innerText = count;
  container.append(buttonMinus, countSpan, buttonPlus);

  const getHandler = (delta) => () => {
    count += delta;
    countSpan.innerText = count;
  };

  buttonPlus.addEventListener("click", getHandler(1));

  buttonMinus.addEventListener("click", getHandler(-1));

  return container;
};
