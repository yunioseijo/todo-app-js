import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos, renderPending } from "./use-cases/index";
import { Filters } from "../store/todo.store";

const ElementIds = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  ClearCompleted: ".clear-completed",
  TodoFilters: ".filter",
  PendingCount: "#pending-count",
};

/** @param {string} elementId */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIds.TodoList, todos);
    updatePendingCount();
  };
  const updatePendingCount = () => {
    renderPending(ElementIds.PendingCount);
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
  const clearCompleteButton = document.querySelector(ElementIds.ClearCompleted);
  const filtersLis = document.querySelectorAll(ElementIds.TodoFilters);

  //Inputs Listeners
  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.key !== "Enter") return;
    if (!newDescriptionInput.value || !newDescriptionInput.value.trim()) return;
    todoStore.addTodo(newDescriptionInput.value);
    displayTodos();
    newDescriptionInput.value = "";
  });
  todoListUl.addEventListener("click", (event) => {
    //Delete Element
    if (event.target.matches(".destroy")) {
      todoStore.deleteTodo(
        event.target.closest("[data-id]").getAttribute("data-id")
      );
      displayTodos();
      return;
    }
    //Toggle Element completed
    const element = event.target.closest("[data-id]");
    if (!element) return;
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  clearCompleteButton.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLis.forEach((filter) => {
    filter.addEventListener("click", (element) => {
      filtersLis.forEach((el) => el.classList.remove("selected"));
      element.target.classList.add("selected");
      switch (element.target.text) {
        case "Todos":
          todoStore.setFilter(Filters.All);
          break;
        case "Pendientes":
          todoStore.setFilter(Filters.Pending);
          break;
        case "Completados":
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
