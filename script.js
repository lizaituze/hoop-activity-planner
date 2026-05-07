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
const activityInput = document.getElementById("activityInput");
const addActivityBtn = document.getElementById("addActivityBtn");
const activityList = document.getElementById("activityList");

addActivityBtn.addEventListener("click", function () {
  const activityText = activityInput.value.trim();

  if (activityText === "") {
    alert("Please enter an activity first.");
    return;
  }

  const newActivity = document.createElement("li");
  newActivity.textContent = activityText;

  newActivity.addEventListener("click", function () {
    newActivity.remove();
  });

  activityList.appendChild(newActivity);
  activityInput.value = "";
});
const cardButtons = document.querySelectorAll(".card-btn");

cardButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedActivity = button.getAttribute("data-activity");

    const newActivity = document.createElement("li");
    newActivity.textContent = selectedActivity;

    newActivity.addEventListener("click", function () {
      newActivity.remove();
    });

    activityList.appendChild(newActivity);
  });
});