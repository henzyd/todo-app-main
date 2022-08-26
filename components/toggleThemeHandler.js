/**
 * Here i am storing a functionn used to toggle the classname dark in an element
 */

// this is a function used to apply classlist.toggle('dark') on an element passed in to the parameter
function toggleThemeHandler(className) {
  return className.classList.toggle("dark");
}

export default toggleThemeHandler;
