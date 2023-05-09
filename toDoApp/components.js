import { createElement } from "../domUtils.js";

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

export const todoList = (elements) => {
  const childElements = elements.map((element) =>
    createElement("div", element)
  );
  const list = createElement("div", childElements);

  return list;
};