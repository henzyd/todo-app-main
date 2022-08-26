/**
 * Here i am storing the function used to clone an element
 */

function CloneHandler(item) {
  return item.cloneNode(true); // here i am clonening item and all the contents in it
}

export default CloneHandler;
