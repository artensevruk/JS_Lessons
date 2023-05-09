const key = "toDos";

export const readToDos = () => {
  const array = JSON.parse(localStorage.getItem(key)) || [];
  return array;
};

export const writeToDo = (toDo) => {
  const array = readToDos();
  array.push(toDo);
  localStorage.setItem(key , JSON.stringify(array));
};
