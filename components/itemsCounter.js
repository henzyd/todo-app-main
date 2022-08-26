/**
 * here i am store the number of items in the todo list
 */

// Variable
import { allItemsCounter, Todo } from "./globalVariable.js";

function itemsCounterHandler() {
  allItemsCounter.innerText = Todo.childElementCount - 1;
}

export default itemsCounterHandler;
