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