import { inlineForm  , todoList} from "./components.js";
import{createElement} from "../domUtils.js"

export const toDoApp = () => {
    const form = inlineForm((text) => {
      const div = createElement("div", text);
  
      let array = [];
      localStorage.setItem(text, JSON.stringify(text));
      array = JSON.parse(localStorage.getItem(text));
  
      list.append(div);
    });
    const list = todoList();
    const div = createElement("div", [form, list]);
    return div;
}