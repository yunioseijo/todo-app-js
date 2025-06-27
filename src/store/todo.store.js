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
export default { initStore };
