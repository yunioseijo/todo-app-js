/**
 * Generates the HTML for a single Todo item.
 * @param {Todo} todo - The Todo item to generate HTML for.
 * @returns {string} The HTML for the Todo item.
 */
export const createTodoHtml = (todo) => {
  if (!todo) throw new Error("Todo object is required");
  const { id, description, done } = todo;
  const html = `<div class="view">
                    <input class="toggle" type="checkbox" ${
                      done ? "checked" : ""
                    }>
                    <label>${description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="${description}">
           `;
  const liElement = document.createElement("li");
  liElement.innerHTML = html;
  liElement.setAttribute("data-id", id);
  if (todo.done) {
    liElement.classList.add("completed");
  }

  return liElement;
};
