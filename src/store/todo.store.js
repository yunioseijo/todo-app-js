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
const addTodo = (description) => {
  throw new Error("Method not implemented. Please implement this method.");
};
const toggleTodo = (todoId) => {
  throw new Error("Method not implemented. Please implement this method.");
};
const deleteTodo = (todoId) => {
  throw new Error("Method not implemented. Please implement this method.");
};
const deleteCompleted = () => {
  throw new Error("Method not implemented. Please implement this method.");
};
const setFilter = (newFilter = Filters.All) => {
  throw new Error("Method not implemented. Please implement this method.");
};
const getCurrentFilter = () => {
  throw new Error("Method not implemented. Please implement this method.");
};
export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
