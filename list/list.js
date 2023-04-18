const items = ['red', 'green', 'blue'];

const shell = (items) => {
  const container = document.createElement("div");
  const list = document.createElement("ul");
  const list_attributes = document.createElement("li");
  const list_attributes2 = document.createElement("li");
  const list_attributes3 = document.createElement("li");

  list.append(list_attributes);
  list.append(list_attributes2);
  list.append(list_attributes3);

  list_attributes.innerHTML = items[0];
  list_attributes2.innerHTML = items[1];
  list_attributes3.innerHTML = items[2];
  container.append(list);
  
  return container;
};


document.body.append(shell(items));
