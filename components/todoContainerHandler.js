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
  removeBtnParent,
} from "./globalVariable.js";

// Funtions
import CloneHandler from "./cloneHandler.js";
import userTodoHandler from "./userTodoHandler.js";
import checkedBtnHandler from "./checkedBtn.js";
import itemsCounterHandler from "./itemsCounter.js";

function todoContainerHandler() {
  const todoContainer = document.createElement("div");
  Todo.appendChild(todoContainer); // here i am adding the element i created to its parent
  todoContainer.classList.add("first-todo");

  // <div class="unchecked">
  const clonedUncheckedBtn = CloneHandler(uncheckedBtn);
  // <div class="checked">
  const clonedCheckedBtn = CloneHandler(checkedBtn);

  todoContainer.appendChild(clonedUncheckedBtn);
  todoContainer.appendChild(clonedCheckedBtn);
  clonedUncheckedBtn.addEventListener("click", () => {
    checkedBtnHandler(
      clonedCheckedBtn,
      clonedUncheckedBtn,
      createdPTag,
      "line-through"
    );
  });
  clonedCheckedBtn.addEventListener("click", () => {
    checkedBtnHandler(clonedCheckedBtn, clonedUncheckedBtn, createdPTag);
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
    Todo.removeChild(todoContainer);
    itemsCounterHandler();
  }); // Here i brought the item in removeBtn and said it should be cloned then appended to the todoContainer and that it should be given an evenlistener

  todoContainer.addEventListener("mouseenter", () => {
    clonedRemoveBtn.classList.remove("display");
  });
  todoContainer.addEventListener("mouseleave", () => {
    clonedRemoveBtn.classList.add("display");
  });
}

export default todoContainerHandler;
