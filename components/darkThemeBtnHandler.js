/**
 * Here i am storing a function used to control what happens when the dark icon btn is clicked
 */

// Variables
import {
  darkThemeBtn,
  lightThemeBtn,
  bgImgDark,
  bgImgLight,
  body,
} from "./globalVariable.js";

// Functions
import toggleThemeHandler from "./toggleThemeHandler.js";

function darkThemeBtnHandler() {
  // icons
  darkThemeBtn.classList.add("theme");
  lightThemeBtn.classList.remove("theme");

  // bg-imgs
  bgImgDark.classList.remove("theme");
  bgImgLight.classList.add("theme");

  toggleThemeHandler(body);
}

export default darkThemeBtnHandler;
