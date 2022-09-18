/**
 * here i am storing a function used to control the style of the footer elements
 */

// VARIABLES
import { footerActive, footerCompleted, footerAll } from "./globalVariable.js";

function footerStyleHandler(activeStyle, completedStyle, allStyle) {
  for (let [x, y] of footerActive.entries()) {
    y.style.color = `${activeStyle}`;
  }
  for (let [x, y] of footerCompleted.entries()) {
    y.style.color = `${completedStyle}`;
  }
  for (let [x, y] of footerAll.entries()) {
    y.style.color = `${allStyle}`;
  }
}

export default footerStyleHandler;
