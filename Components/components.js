const items = ["red", "green", "blue"];

const list = (items) => {
  
  const list = document.createElement("ul");
 
//   for(let i = 0 ; i < items.length ; i++){
//     const listElement = document.createElement("li");
//     list.append(listElement);
//     listElement.innerText = items[i];
//   }

// items.forEach(element => {
//     const listElement = document.createElement("li");
//     list.append(listElement);
//     listElement.innerText = element;
// });

for(const i of items){
    const listElement = document.createElement("li");
    list.append(listElement);
    listElement.innerText = i;
}


  return list;
};

document.body.append(list(items));







