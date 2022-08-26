// Variables
import {
  input,
  darkThemeBtn,
  lightThemeBtn,
  Todo,
  allItemsCounter,
} from "./components/globalVariable.js";

// Functions;
import todoContainerHandler from "./components/todoContainerHandler.js";
import darkThemeBtnHandler from "./components/darkThemeBtnHandler.js";
import lightThemeBtnHandler from "./components/lightThemeBtnHandler.js";
import itemsCounterHandler from "./components/itemsCounter.js";

itemsCounterHandler();

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    todoContainerHandler();
    itemsCounterHandler();
    input.value = "";
  }
});

darkThemeBtn.addEventListener("click", () => {
  darkThemeBtnHandler();
});

lightThemeBtn.addEventListener("click", () => {
  lightThemeBtnHandler();
});

// this will be used later
//   userTodo.innerText += todo;

// function createdTodoHandler() {}
