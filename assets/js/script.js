const navbar = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    // Adjust this value based on when you want the color to change
    navbar.classList.add("scrolled");
  }
});

let arr = [...document.querySelector(".ul").children];
arr.forEach((cil) => {
  cil.addEventListener("click", function () {
    cil.parentElement.classList.remove("open");
  });
});

document.querySelector(".nav .icon").onclick = function () {
  document.querySelector(".ul").classList.add("open");
};
