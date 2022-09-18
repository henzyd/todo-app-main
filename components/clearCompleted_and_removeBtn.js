/**
 * here i am storing a function used to know if 'active' is displayed or not displayed when either the clearCompleted btn or the removeBtn btn is clicked
 *
 * NOTE: i copied and pasted this function in two different files
 */

// VARIABLES
import { Todo } from "./globalVariable.js";
import { completedArr, todoArr } from "./itemsCounter.js";

// FUNCTIONS
import { itemsCounterHandler } from "./itemsCounter.js";

function clearCompletedAndRemoveBtnHandler() {
  const collection = Todo.children;
  for (let x = 0; x < collection.length; x++) {
    if (collection[x].className.includes("all-todo")) {
      if (
        collection[x].className.includes("active") &&
        collection[x].style.display === "none"
      ) {
        itemsCounterHandler([], completedArr);
        break;
      } else if (
        !collection[x].className.includes("active") &&
        collection[x].style.display === "none"
      ) {
        itemsCounterHandler(todoArr, []);
        break;
      } else {
        continue;
      }
    }
    itemsCounterHandler();
  }
}

export default clearCompletedAndRemoveBtnHandler;
