import { inlineForm  , toDoList , toDoListItem} from "./components.js";
import{createElement} from "../domUtils.js"
import {readToDos , writeToDo } from "./storage.js";


export const toDoApp = () => {
   let array = readToDos();
    const form = inlineForm((text) => {
      const toDo = {text , done : false};
      const div = toDoListItem(toDo);
      writeToDo(toDo); 

      list.append(div);
    });
    const list = toDoList(array);
    const div = createElement("div", { className : "toDoApp"} , [form, list]);
    return div;
}