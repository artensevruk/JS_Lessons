import { createElement as $ } from "../domUtils.js";

export const inlineForm = (onsubmit) => {
  const input = $("input");
  const button = $("input", { type: "submit" });
  const inlineForm = $("form", [input, button]);

  inlineForm.onsubmit = (event) => {
    onsubmit(input.value);
    event.preventDefault();
    input.value = "";
  };

  return inlineForm;
};

export const todoList = (toDos) => {
  return $(
    "div",
    toDos.map((item) => $("div", [$("span" , item) , $("input" , {type : "checkbox"})])
    )
  );


};
