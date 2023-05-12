import { createElement as $ } from "../domUtils.js";

export const inlineForm = (onsubmit) => {
  const input = $("input" , { className: "ToDoInput"});
  const button = $("input", {

    type: "submit",
    value: "Add",
    className: "AddButton"

  });
  const inlineForm = $("form", [input, button]);

  inlineForm.onsubmit = (event) => {
    onsubmit(input.value);
    event.preventDefault();
    input.value = "";
  };

  return inlineForm;
};

export const toDoListItem = (toDo) => {
  return $("div", {className : "ToDoItem"} ,  [
    $("span", toDo.text),
    $("input", { type: "checkbox", checked: toDo.done , className : "checkBox"}),
  ]);
};

export const toDoList = (toDos) => {
  return $(
    "div", {className :  "toDoList"},
    toDos.map((toDo) => toDoListItem(toDo))
  );
};
