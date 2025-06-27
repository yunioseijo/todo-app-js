import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases/render-todos";

const ElementIds = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
};

/** @param {string} elementId */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIds.TodoList, todos);
  };
  // Display the initial list of todos when App() is called
  (() => {
    const app = document.createElement("div");
    app.innerHTML = `${html}`;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
  //Reference HTML
  const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
  const todoListUl = document.querySelector(ElementIds.TodoList);

  //Inputs Listeners
  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.key !== "Enter") return;
    if (!newDescriptionInput.value || !newDescriptionInput.value.trim()) return;
    todoStore.addTodo(newDescriptionInput.value);
    displayTodos();
    newDescriptionInput.value = "";
  });
  todoListUl.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    if (!element) return;
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });
};
