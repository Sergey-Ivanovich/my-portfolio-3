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

setTimeout(hideHintText, 2500);
setTimeout(toggleNavbar, 100);

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

let headerTypewriter = document.querySelector("#type-writer-header");
let headerText1 = document.querySelector("#header-text-1");
let headerText2 = document.querySelector("#header-text-2");

let headerElement = document.querySelector(".header");

setTimeout(typeWriteHeading, 1000);
setTimeout(displayHeaderText1, 500);
setTimeout(displayHeaderText2, 200);

/*function changeBackground() {
  if (page.classList.contains("blackground")) {
    page.classList.remove("blackground");
  } else {
    page.classList.add("blackground");
  }
}

let page = document.querySelector("body");

setTimeout(changeBackground, 1);*/

//main below

let typewrited = false;

function moreDescWrite() {
  new Typewriter("#type-writer-main-desc", {
    strings: "My Websites are: ",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

function descWrite() {
  typewrited = true;
  new Typewriter("#type-writer-main-top", {
    strings: "I Build Websites",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
  setTimeout(moreDescWrite, 1000);
}

function detectScroll() {
  if (window.scrollY > 600 && typewrited === false) {
    descWrite();
  }

  if (window.scrollY > 300) {
    roleWrite();
  }
}

function roleWrite() {
  roleElement.classList.add("cool-display");
}

let roleElement = document.querySelector("#job-role");
setInterval(detectScroll, 100);
