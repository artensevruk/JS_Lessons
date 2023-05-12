const key = "toDos";

export const readToDos = () => {
  const array = JSON.parse(localStorage.getItem(key)) || [];
  return array;
};

const update =(updatedToDo) =>{
const toDos = readToDos();
// const storedToDoIndex = toDos.findIndex(storedToDo => storedToDo.id === updatedToDo.id)
for(let i = 0; i < toDos.length ; i++ ){
  if(toDos[i].id === updatedToDo.id){
  toDos[i] = updatedToDo;
  writeJson(toDos);
  }
}


return storedToDo;
}

const writeJson = (array) => {
  localStorage.setItem(key , JSON.stringify(array));
}

export const writeToDo = (toDo) => {
  const array = readToDos();
  array.push(toDo);
  writeJson(array);
};
