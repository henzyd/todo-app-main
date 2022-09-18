/**
 * here i am store the number of items in the todo list
 */

// Variable
import { allItemsCounter, notShow, Todo, zeroTodo } from "./globalVariable.js";

export let todoArr = [];
export let completedArr = [];
export function itemsCounterHandler(arr1 = todoArr, arr2 = completedArr) {
  allItemsCounter.innerText = arr1.length + arr2.length;
}
