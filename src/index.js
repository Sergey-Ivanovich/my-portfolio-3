let navToggle = document.querySelector(".toggle-nav");
let nav = document.querySelector(".nav-container");
let headerTypewriter = document.querySelector("#type-writer-header");

function typeWriteHeading() {
  new Typewriter("#type-writer-header", {
    strings: "Self-Taught Front-End <br /> Developer",
    autoStart: true,
    delay: 50,
  });
}

function toggleNavbar() {
  nav.classList.toggle("hide-bar");
}

navToggle.addEventListener("click", toggleNavbar);

function hideHintText() {
  hintText.classList.add("hide");
}

let hintText = document.querySelector("#hint-navbar");

setTimeout(hideHintText, 2000);
setTimeout(toggleNavbar, 2000);
setTimeout(typeWriteHeading, 500);
