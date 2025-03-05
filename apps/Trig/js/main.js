const navbarBtn = document.querySelector(".menu-btn");
const navbarCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbarBtn.classList.add("menu-btn-bg-black");
    navbarBtn.classList.remove("menu-btn-bg-transparent");
  } else {
    navbarBtn.classList.add("menu-btn-bg-transparent");
    navbarBtn.classList.remove("menu-btn-bg-black");
  }
});

navbarBtn.addEventListener("click", function () {
  nav.classList.add("nav-open");
  nav.classList.remove("nav-close");
});

navbarCloseBtn.addEventListener("click", function () {
  nav.classList.add("nav-close");
  nav.classList.remove("nav-open");
});
