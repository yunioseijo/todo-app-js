import { Todo } from "../todos/models/todo";
const Filters = {
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
  console.log(state);
  console.log("initStore 🥑 ");
  return state;
};

const loadStore = () => {
  throw new Error("Method not implemented. Please implement this method.");
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
};
/**
 * Toggles a todo item as done or not done.
 * @param {string} todoId - The ID of the todo item to be toggled.
 * @throws {Error} If the todo item is not found.
 */
const toggleTodo = (todoId) => {
  const todo = state.todos.find((todo) => todo.id === todoId);
  todo.done = !todo.done;
};
/**
 * Deletes a todo item from the state.
 * @param {string} todoId - The ID of the todo item to be deleted.
 */

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};
const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};
/**
 * Sets the filter to be used in the application.
 * @param {Filters} [newFilter=Filters.All] - The new filter to be used.
 */
const setFilter = (newFilter = Filters.All) => {
  if (Object.values(Filters).includes(newFilter) === false)
    throw new Error(`Unknown filter: ${newFilter}`);
  state.filter = newFilter;
};
const getCurrentFilter = () => {
  return state.filter;
};
export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
