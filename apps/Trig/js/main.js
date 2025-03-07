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

// Open nav bar
navbarBtn.addEventListener("click", function () {
  nav.classList.add("nav-open");
  nav.classList.remove("nav-close");

  [...nav.children].map((element) => {
    element.classList.remove("nav-child-close");
    element.classList.add("nav-child-open");
  });
});

// Close nav bar
navbarCloseBtn.addEventListener("click", function () {
  nav.classList.add("nav-close");
  nav.classList.remove("nav-open");

  [...nav.children].map((element) => {
    element.classList.add("nav-child-close");
    element.classList.remove("nav-child-open");
  });
});

window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  document.querySelector(".parallax").style.transform =
    `translateY(${scrolled * 0.5}px)`;
});
