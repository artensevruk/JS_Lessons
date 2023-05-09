import { inlineForm  , todoList} from "./components.js";
import{createElement} from "../domUtils.js"


export const toDoApp = () => {
  let array  = JSON.parse(localStorage.getItem("to-do")) || [] ;
 
   
  
    const form = inlineForm((text) => {
      const div = createElement("div", text);
      array.push(text);
     localStorage.setItem("to-do" , JSON.stringify(array)); 

      list.append(div);
    });
    const list = todoList(array);
    
    const div = createElement("div", [form, list]);
    return div;
}