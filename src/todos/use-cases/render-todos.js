import { Todo } from "../models/todo";
import { createTodoHtml } from "./index";
let element;
/**
 * Renders the list of todo items.
 * @param {string} elementId - The ID of the DOM element where the list will be rendered.
 * @param {Todo[]} [todos=[]] - The list of todo items to be rendered.
 */
export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error("Element not found");
  element.innerHTML = "";
  todos.forEach((todo) => {
    element.append(createTodoHtml(todo));
  });
};
