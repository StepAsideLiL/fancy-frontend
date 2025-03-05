window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".menu-btn");

  if (window.scrollY > 100) {
    navbar.classList.add("menu-btn-bg-black");
    navbar.classList.remove("menu-btn-bg-transparent");
  } else {
    navbar.classList.add("menu-btn-bg-transparent");
    navbar.classList.remove("menu-btn-bg-black");
  }
});
