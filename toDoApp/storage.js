const toDosKey = "toDos";
const nextIdKey = "nextId";
export const readToDos = () => {
  const array = JSON.parse(localStorage.getItem(toDosKey)) || [];
 
  let nextId = 0;

  if (!localStorage.hasOwnProperty(nextIdKey)) {
    localStorage.setItem(nextIdKey , nextId);
  }

  return array;
};

const update = (updatedToDo) => {
  const toDos = readToDos();
  // const storedToDoIndex = toDos.findIndex(storedToDo => storedToDo.id === updatedToDo.id)
  for (let i = 0; i < toDos.length; i++) {
    if (toDos[i].id === updatedToDo.id) {
      toDos[i] = updatedToDo;
      writeJson(toDos);
    }
  }

  return storedToDo;
};

const writeJson = (array) => {
  localStorage.setItem(toDosKey, JSON.stringify(array));
};

export const writeToDo = (toDo) => {
  const array = readToDos();
  let nextId = localStorage.getItem(nextIdKey);

  nextId = +nextId + 1;
  toDo.id = nextId;
  localStorage.setItem(nextIdKey , nextId);

  array.push(toDo);
  writeJson(array);
};
