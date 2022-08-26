/**
 * Here i am storing a function used to collect input from a user and create an element from it
 */

function userTodoHandler(todoValue) {
  const pTag = document.createElement("p"); // this creates an element for you
  pTag.classList.add("user-todo");
  const valFromInput = document.createTextNode(todoValue); // this creates the textContent of an element
  pTag.appendChild(valFromInput);

  return pTag;
}

export default userTodoHandler;
