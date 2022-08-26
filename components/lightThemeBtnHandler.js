/**
 * Here i am storing a function used to control what happens when the light icon btn is clicked
 */

// Variables
import {
  lightThemeBtn,
  darkThemeBtn,
  bgImgDark,
  bgImgLight,
  body,
} from "./globalVariable.js";

// Functions
import toggleThemeHandler from "./toggleThemeHandler.js";

function lightThemeBtnHandler() {
  // icons
  lightThemeBtn.classList.add("theme");
  darkThemeBtn.classList.remove("theme");

  // bg-imgs
  bgImgLight.classList.remove("theme");
  bgImgDark.classList.add("theme");

  // toggleThemeHandler(inputContainer);
  toggleThemeHandler(body);
}

export default lightThemeBtnHandler;
