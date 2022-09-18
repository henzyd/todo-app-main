/**
 * Here i am storing the function that is used to create the user's todo container
 */

// Variables
import {
  removeBtn,
  input,
  uncheckedBtn,
  checkedBtn,
  Todo,
  allItemsCounter,
} from "./globalVariable.js";

// Funtions
import CloneHandler from "./cloneHandler.js";
import userTodoHandler from "./userTodoHandler.js";
import checkedBtnHandler from "./checkedBtn.js";
import { itemsCounterHandler, todoArr, completedArr } from "./itemsCounter.js";
import zeroTodoHandler from "./zeroTodoContainer.js";
import clearCompletedAndRemoveBtnHandler from "./clearCompleted_and_removeBtn.js";

function todoContainerHandler() {
  const todoContainer = document.createElement("div");
  Todo.prepend(todoContainer); // here i am adding the element i created to its parent
  todoContainer.classList.add("first-todo");
  todoContainer.classList.add("all-todo");
  todoContainer.classList.add("active");

  // <div class="unchecked">
  const clonedUncheckedBtn = CloneHandler(uncheckedBtn);

  // <div class="checked">
  const clonedCheckedBtn = CloneHandler(checkedBtn);

  // <div class="checking-container">
  const checkingContainer = document.createElement("div");
  checkingContainer.classList.add("checking-container");
  todoContainer.appendChild(checkingContainer);

  checkingContainer.appendChild(clonedUncheckedBtn);
  checkingContainer.appendChild(clonedCheckedBtn);

  clonedUncheckedBtn.addEventListener("click", () => {
    checkedBtnHandler(
      clonedUncheckedBtn, /// I assigned checkbtn parameter to clonedUncheckedBtn
      clonedCheckedBtn, /// I assigned uncheckbtn parameter to clonedCheckedBtn
      createdPTag,
      "line-through"
    );
    todoContainer.classList.remove("active");
    todoContainer.classList.add("completed-todo");
    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i] === todoContainer) {
        completedArr.push(...todoArr.splice(i, 1));
      }
    }
    // itemsCounterHandler();
  });
  clonedCheckedBtn.addEventListener("click", () => {
    checkedBtnHandler(clonedCheckedBtn, clonedUncheckedBtn, createdPTag);
    todoContainer.classList.add("active");
    todoContainer.classList.remove("completed-todo");
    for (let i = 0; i < completedArr.length; i++) {
      if (completedArr[i] === todoContainer) {
        todoArr.push(...completedArr.splice(i, 1));
      }
    }
    // itemsCounterHandler();
  });

  // <p class="user-todo">
  const createdPTag = userTodoHandler(input.value);
  todoContainer.appendChild(createdPTag);

  // <div class="remove-btn">
  // const RemoveBtnParent = CloneHandler(removeBtnParent);
  const RemoveBtnParent = document.createElement("div");
  RemoveBtnParent.classList.add("remove-btn-parent"); // here i am creating an element for the cloneRemoveBtn and giving it the class of "remove-btn-parent"
  todoContainer.appendChild(RemoveBtnParent);

  const clonedRemoveBtn = CloneHandler(removeBtn);
  RemoveBtnParent.appendChild(clonedRemoveBtn);
  clonedRemoveBtn.addEventListener("click", () => {
    // This is for the todo array
    for (let [x, y] of todoArr.entries()) {
      if (todoArr[x] === todoContainer) {
        todoArr.splice(x, 1);
      }
    }

    // This is for the completed array
    for (let [x, y] of completedArr.entries()) {
      if (completedArr[x] === todoContainer) {
        completedArr.splice(x, 1);
      }
    }
    Todo.removeChild(todoContainer);

    clearCompletedAndRemoveBtnHandler();

    zeroTodoHandler();
    // activeOrCompletedZeroTodoHandler();
  }); // Here i brought the item in removeBtn and said it should be cloned then appended to the todoContainer and that it should be given an evenlistener

  todoContainer.addEventListener("mouseenter", () => {
    clonedRemoveBtn.classList.remove("display");
  });
  todoContainer.addEventListener("mouseleave", () => {
    clonedRemoveBtn.classList.add("display");
  });

  return todoContainer;
}

export default todoContainerHandler;
