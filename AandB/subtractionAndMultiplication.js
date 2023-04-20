const counter = (example) => {
  const container = document.createElement("div");
  const countSpan = document.createElement("span");
  const transition = document.createElement("br");
  const countSpan2 = document.createElement("span");
  container.append(countSpan , transition);
  container.append(countSpan2);

  let result;
  let result2;


  
  const logger = (a, b) => () => {
    result = a + b;

    result2 = a - b;
  };

  logger(1, 15);

  countSpan.innerText = logger(1, 15);
  countSpan2.innerText = result2;

  return container;
};

document.body.append(counter());
// const add = (a, b) => {};
