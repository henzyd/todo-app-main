/**
 * Here i am storing my filter function that controls what will be shown to the user when they click any of the button in at the footer
 */

// VARIABLES
import { Todo } from "./globalVariable.js";

function filterTodoHandler(includesActive, notIncludesActive) {
  const collection = Todo.children;
  for (let x = 0; x < collection.length; x++) {
    if (collection[x].className.includes("all-todo")) {
      if (!collection[x].className.includes("active")) {
        collection[x].style.display = `${notIncludesActive}`;
      } else if (collection[x].className.includes("active")) {
        collection[x].style.display = `${includesActive}`;
      }
    }
  }
}

export default filterTodoHandler;
