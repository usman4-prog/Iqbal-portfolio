// Progress bars animation
document.querySelectorAll(".fill").forEach(fill => {
  const value = fill.getAttribute("data-width");
  setTimeout(() => {
    fill.style.width = value + "%";
  }, 500);
});

// Circle animation
document.querySelectorAll(".circle").forEach(circle => {
  const val = circle.getAttribute("data-value");
  const endAngle = (val / 100) * 360;
  setTimeout(() => {
    circle.style.background = `conic-gradient(#00d4ff ${endAngle}deg, #1e1e1e 0deg)`;
  }, 800);
});

// Animate Bars
document.querySelectorAll(".fill").forEach(bar => {
  let width = bar.getAttribute("data-width");
  setTimeout(() => {
    bar.style.width = width + "%";
  }, 300);
});


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});



