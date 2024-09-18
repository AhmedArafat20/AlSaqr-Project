let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    navbar.classList.add("navbar-hidden");
  } else {
    // Scroll up
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}); 