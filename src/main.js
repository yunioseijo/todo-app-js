import "./style.css";
import { App } from "./todos/app.js";
import todoStore from "./store/todo.store.js";
console.log("Hello from main.js");
App("#app");
todoStore.initStore();
