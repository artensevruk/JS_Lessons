import { inlineForm  , todoList} from "./components.js";
import{createElement} from "../domUtils.js"
import {readToDos , writeToDo } from "./storage.js";


export const toDoApp = () => {
   let array = readToDos();
    const form = inlineForm((text) => {
      const div = createElement("div", text);
      writeToDo(text);

      list.append(div);
    });
    const list = todoList(array);
    
    const div = createElement("div", [form, list]);
    return div;
}