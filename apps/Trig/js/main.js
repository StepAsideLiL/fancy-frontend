const navbar = document.querySelector(".menu-btn");
const navbarCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("menu-btn-bg-black");
    navbar.classList.remove("menu-btn-bg-transparent");
  } else {
    navbar.classList.add("menu-btn-bg-transparent");
    navbar.classList.remove("menu-btn-bg-black");
  }
});

navbar.addEventListener("click", function () {
  nav.classList.add("nav-open");
  nav.classList.remove("nav-close");
});

navbarCloseBtn.addEventListener("click", function () {
  nav.classList.add("nav-close");
  nav.classList.remove("nav-open");
});
