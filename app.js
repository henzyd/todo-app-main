// Variables
import {
  input,
  darkThemeBtn,
  lightThemeBtn,
  Todo,
  zeroTodo,
  footerAll,
  allTodo,
  footerActive,
  active,
  footerCompleted,
  clearCompleted,
  completedTodo,
  completedZeroTodo,
  activeZeroTodo,
} from "./components/globalVariable.js";

// Functions;
import todoContainerHandler from "./components/todoContainerHandler.js";
import darkThemeBtnHandler from "./components/darkThemeBtnHandler.js";
import lightThemeBtnHandler from "./components/lightThemeBtnHandler.js";
import {
  completedArr,
  itemsCounterHandler,
  todoArr,
} from "./components/itemsCounter.js";
import zeroTodoHandler from "./components/zeroTodoContainer.js";
import filterTodoHandler from "./components/filterTodo.js";
import clearCompletedAndRemoveBtnHandler from "./components/clearCompleted_and_removeBtn.js";
import footerStyleHandler from "./components/footerStyle.js";

itemsCounterHandler();
zeroTodoHandler();
footerStyleHandler("", "", "rgb(58, 123, 253)");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    todoArr.push(todoContainerHandler());
    zeroTodo.style.display = "none";
    completedZeroTodo.style.display = "none";
    activeZeroTodo.style.display = "none";
    footerStyleHandler("", "", "rgb(58, 123, 253)");
    itemsCounterHandler();
    input.value = "";
    filterTodoHandler("", "");
  }
});

darkThemeBtn.addEventListener("click", () => {
  darkThemeBtnHandler();
});

lightThemeBtn.addEventListener("click", () => {
  lightThemeBtnHandler();
});

footerActive.forEach((ele) => {
  ele.addEventListener("click", () => {
    filterTodoHandler("", "none");
    itemsCounterHandler(todoArr, []);
    footerStyleHandler("rgb(58, 123, 253)", "", "");
    zeroTodoHandler();
    completedZeroTodo.style.display = "none";
    zeroTodo.style.display = "none";
  });
});

footerCompleted.forEach((ele) => {
  ele.addEventListener("click", () => {
    filterTodoHandler("none", "");
    itemsCounterHandler([], completedArr);
    footerStyleHandler("", "rgb(58, 123, 253)", "");
    zeroTodoHandler();
    zeroTodo.style.display = "none";
    activeZeroTodo.style.display = "none";
  });
});

footerAll.forEach((ele) => {
  ele.addEventListener("click", () => {
    filterTodoHandler("", "");
    itemsCounterHandler();
    footerStyleHandler("", "", "rgb(58, 123, 253)");
    zeroTodoHandler();
    completedZeroTodo.style.display = "none";
    activeZeroTodo.style.display = "none";
  });
});

clearCompleted.addEventListener("click", () => {
  const collection = Todo.children;
  for (let x = 0; x < collection.length; x++) {
    // NOTE i used 'if' here and it didnt work then i used while and it worked reason unknown
    while (collection[x].className.includes("completed-todo")) {
      Todo.removeChild(collection[x]);
      while (!(completedArr.length === 0)) {
        completedArr.pop();
      }
    }
  }
  clearCompletedAndRemoveBtnHandler();
  zeroTodoHandler();
});

// this will be used later
//   userTodo.innerText += todo;

// function createdTodoHandler() {}
