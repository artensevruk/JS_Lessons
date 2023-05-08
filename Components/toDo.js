import { createElement } from "./utils.js";

export const inlineForm = (onsubmit) => {
    const input = createElement("input");
    const button = createElement("input", { type: "submit" });
    const inlineForm = createElement("form", [input, button]);
  
    inlineForm.onsubmit = (event) => {
      onsubmit(input.value);
      event.preventDefault();
      input.value = "";
    };
  
    return inlineForm;
  };
  
  export const todoList = () => {
    return createElement ('div');
  };
  
  export const toDoApp = () => {
    const form = inlineForm((text) => {
      const div = createElement("div", text);
      localStorage.setItem("text", text.toString());
      list.append(div);
      
    });
 
    const list = todoList();
    const div = createElement("div", [form, list]);
    return div;
  };