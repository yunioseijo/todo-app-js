import { v4 as uuid } from "uuid";
export class Todo {
  /**
   * Initializes a new instance of the Todo class.
   * @param {string} description - The description of the todo item.
   * Sets the initial state of the todo as not done and assigns the current date to createdAt.
   */
  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
