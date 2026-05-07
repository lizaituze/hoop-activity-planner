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
const introText = document.getElementById("introText");
const changeTextBtn = document.getElementById("changeTextBtn");
const themeBtn = document.getElementById("themeBtn");

changeTextBtn.addEventListener("click", function () {
  introText.textContent =
    "Consistency builds confidence. Keep training, keep improving, and keep showing up.";
});

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});