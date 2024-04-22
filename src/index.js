let navToggle = document.querySelector(".toggle-nav");
let nav = document.querySelector(".nav-container");

function toggleNavbar() {
  nav.classList.toggle("hide-bar");
}

navToggle.addEventListener("click", toggleNavbar);

function hideHintText() {
  hintText.classList.add("hide");
}

let hintText = document.querySelector("#hint-navbar");

setTimeout(hideHintText, 5000);
