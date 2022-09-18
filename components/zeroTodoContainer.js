/**
 * here i am storing a function used to display the zeroTodo, activeZeroTodo and completedZeroTodo
 */

// Variables
import { completedArr, todoArr } from "./itemsCounter.js";
import {
  activeZeroTodo,
  completedZeroTodo,
  footerActive,
  footerCompleted,
  zeroTodo,
} from "./globalVariable.js";

function footerItemsHandler(footer) {
  let y = footer.entries();
  let b = [];
  for (let [x, z] of y) {
    b.push(z);
  }
  return b;
}

function zeroTodoHandler() {
  const [completedA, completedC] = footerItemsHandler(footerCompleted);
  const [activeA, activeC] = footerItemsHandler(footerActive);
  if (
    todoArr.length === 0 &&
    activeA.style.color === "rgb(58, 123, 253)" &&
    activeC.style.color === "rgb(58, 123, 253)"
  ) {
    zeroTodo.style.display = "none";
    activeZeroTodo.style.display = "";
    completedZeroTodo.style.display = "none";
  } else if (
    completedArr.length === 0 &&
    completedA.style.color === "rgb(58, 123, 253)" &&
    completedC.style.color === "rgb(58, 123, 253)"
  ) {
    zeroTodo.style.display = "none";
    activeZeroTodo.style.display = "none";
    completedZeroTodo.style.display = "";
  } else if (todoArr.length === 0 && completedArr.length === 0) {
    zeroTodo.style.display = "";
    activeZeroTodo.style.display = "none";
    completedZeroTodo.style.display = "none";
  }
}

// function activeOrCompletedZeroTodoHandler() {
//   const [a, c] = completedFooterItemsHandler();
//   if (todoArr.length === 0) {
//     zeroTodo.style.display = "none";
//     activeZeroTodo.style.display = "";
//     completedZeroTodo.style.display = "none";
//   } else if (
//     completedArr.length === 0 &&
//     a.style.color === "rgb(58, 123, 253)" &&
//     c.style.color === "rgb(58, 123, 253)"
//   ) {
//     console.log("feefefee");
//     zeroTodo.style.display = "none";
//     activeZeroTodo.style.display = "none";
//     completedZeroTodo.style.display = "";
//   } else {
//     console.log("yolo");
//   }
// }

export default zeroTodoHandler;
