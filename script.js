const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

hamburgerBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

dropdownBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});