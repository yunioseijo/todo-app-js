import { Todo } from "../todos/models/todo";
export const Filters = {
  All: "all",
  Completed: "completed",
  Pending: "active",
};

const state = {
  todos: [
    new Todo("Probar JavaScript"),
    new Todo("Comprar un unicornio"),
    new Todo("Rule the web"),
    new Todo("Create a TodoMVC template"),
    new Todo('Test "TodoMVC"'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log("initStore 🥑 ");
  loadStore();
  // return state;
};

const saveStateToLocalStorage = () => {
  console.log("saveStateToLocalStorage 🥑 ", state);
  localStorage.setItem("state", JSON.stringify(state));
};

const loadStore = () => {
  const storage = localStorage.getItem("state");
  if (!storage) return;
  const { todos, filter } = JSON.parse(storage);
  state.todos = todos;
  state.filter = filter;
};
/**
 * Returns the filtered list of todo items.
 * @param {Filters} [filter=Filters.All] - The filter to apply to the list of todo items.
 * @returns {Todo[]} - The filtered list of todo items.
 * @throws {Error} If the filter is unknown.
 */
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
/**
 * Adds a new todo item to the state.
 * @param {string} description - The description of the new todo item.
 * @throws {Error} If the description is not provided.
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is required");
  state.todos.push(new Todo(description));
  saveStateToLocalStorage();
};
/**
 * Toggles a todo item as done or not done.
 * @param {string} todoId - The ID of the todo item to be toggled.
 * @throws {Error} If the todo item is not found.
 */
const toggleTodo = (todoId) => {
  const todo = state.todos.find((todo) => todo.id === todoId);
  todo.done = !todo.done;
  saveStateToLocalStorage();
};
/**
 * Deletes a todo item from the state.
 * @param {string} todoId - The ID of the todo item to be deleted.
 */

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStorage();
};
const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStorage();
};
/**
 * Sets the filter to be used in the application.
 * @param {Filters} [newFilter=Filters.All] - The new filter to be used.
 */
const setFilter = (newFilter = Filters.All) => {
  if (Object.values(Filters).includes(newFilter) === false)
    throw new Error(`Unknown filter: ${newFilter}`);
  state.filter = newFilter;
  saveStateToLocalStorage();
};
const getCurrentFilter = () => {
  return state.filter;
};
export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  Filters,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
