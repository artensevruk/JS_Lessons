

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


const headerList = (title , items) =>{
  const header = document.createElement("h1");
  header.innerText = title ;
  const wrapper =document.createElement("div");
 
  const listComponent = list(items) ;
  wrapper.append(header , listComponent);
  return wrapper ;
}







