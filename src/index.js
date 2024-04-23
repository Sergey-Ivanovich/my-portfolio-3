// \/ Scroll Clock

function updateScroll() {
  scrollQuantity = window.scrollY;
  console.log(scrollQuantity);
  updateScrollDependencies();
}

function updateScrollDependencies() {
  hideHeader();
}

window.addEventListener("scroll", updateScroll);
let scrollQuantity = 0;

// \/ navbar

function toggleNavbar() {
  nav.classList.toggle("hide-bar");
}

function hideHintText() {
  hintText.classList.add("hide");
}

let hintText = document.querySelector("#hint-navbar");
let navToggle = document.querySelector(".toggle-nav");
let nav = document.querySelector(".nav-container");
navToggle.addEventListener("click", toggleNavbar);

setTimeout(hideHintText, 2000);
setTimeout(toggleNavbar, 2000);

// \/ header

function typeWriteHeading() {
  new Typewriter("#type-writer-header", {
    strings: "Self-Taught Front-End <br /> Developer",
    autoStart: true,
    delay: 50,
  });
}

function displayHeaderText1() {
  headerText1.classList.add("float-in-top");
}

function displayHeaderText2() {
  headerText2.classList.add("float-in-top");
}

function hideHeader() {
  if (scrollQuantity > 100) {
    headerElement.classList.add("animated-hide");
  }
  if (scrollQuantity < 100) {
    headerElement.classList.remove("animated-hide");
  }
}

let headerTypewriter = document.querySelector("#type-writer-header");
let headerText1 = document.querySelector("#header-text-1");
let headerText2 = document.querySelector("#header-text-2");

let headerElement = document.querySelector(".header");

setTimeout(typeWriteHeading, 1000);
setTimeout(displayHeaderText1, 200);
setTimeout(displayHeaderText2, 500);
