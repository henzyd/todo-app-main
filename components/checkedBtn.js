/**
 * here i am storing the handler for the checked and unchecked button
 * checkedBtn - this parameter is used to collect an element that will be toggled the class "none".
 * unchecked - this parameter is used to collect a element that will be toggled the class "none".
 * the class "none" that is being toggled between checkedBtn and uncheckedBtn contains "display: none".
 * pTag - this parameter is used to collect an element which the style textDecoration will be applied on it.
 * txtDec - this is a parameter used to collect what type of textDecoration will be applied on the pTag. txtDec is given a default value = "none" if nothing is assigned to it
 */

function checkedBtnHandler(checkedBtn, uncheckedBtn, pTag, txtDec = "none") {
  checkedBtn.classList.toggle("none");
  uncheckedBtn.classList.toggle("none");
  pTag.style.textDecoration = `${txtDec}`;
}

export default checkedBtnHandler;
