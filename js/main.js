//Variables
let button = document.getElementById("button");
let textbutton = document.querySelector("#menuList");
let icon = document.getElementById("butonIcon");
let iconimg = document.getElementById("butonIcon");
//Event

button.addEventListener("click", Hmenu);
textbutton.addEventListener("click", Hmenu);

//Function ver.1.0

/* function Hmenu() {
    textbutton.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
}
 */

//Function ver.2.0

/* function Hmenu() {
  textbutton.classList.toggle("active");
  if (textbutton.classList == "active") {
    icon.classList.toggle("fa-xmark");
  } else {
    icon.classList.toggle("fa-xmark");
  }
} */

/* //Function ver.3.0
function Hmenu() {
  textbutton.classList.toggle("active");
  if (textbutton.classList == "active") {
    iconimg.src = "./img/close.svg";
  } else {
    iconimg.src = "./img/list.svg";
  }
} */
