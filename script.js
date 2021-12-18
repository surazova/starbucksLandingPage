// script to change the vertical lines on menu button to 'X' on mobile
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  // Adds the class of "open" when clicking on the button

  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);
