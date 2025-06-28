import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * Renders the number of pending todo items.
 * @param {string} elementId - The ID of the DOM element where the count will be rendered.
 * @returns {void}
 */
export const renderPending = (elementId) => {
  if (!element) element = document.querySelector(elementId);
  if (!element) throw new Error("Element not found");
  element.innerHTML = todoStore.getTodos(Filters.Pending).length;
};
