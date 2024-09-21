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

document.addEventListener('click', function (event) {
  var navbarMenu = document.getElementById('navbarNav');
  var toggler = document.querySelector('.navbar-toggler');

  if (!navbarMenu.contains(event.target) && !toggler.contains(event.target)) {
    var bsCollapse = new bootstrap.Collapse(navbarMenu, {
      toggle: false
    });
    bsCollapse.hide(); 
  }
});



// ----------------------------------------------------------------------
// jaddah page js code
gl = document.getElementById("glass");
cl = document.getElementById("clading");
cut = document.getElementById("cutter");
mc = document.getElementById("machines");
last = gl;
function clShow(){
  last.style.display="none";
  cl.style.display="block"
  last = cl;
  console.log("ok")
}
function glShow(){
  last.style.display="none";
  gl.style.display="block"
  last = gl;
}
function cutShow(){
  last.style.display="none";
  cut.style.display="block"
  last = cut;
}
function mcShow(){
  last.style.display="none";
  mc.style.display="block"
  last = mc;
}
// ----------------------------------------------------------------------