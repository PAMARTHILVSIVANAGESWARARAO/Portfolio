// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide on scroll
window.addEventListener("scroll", () => {
  document.querySelector(".style-switcher").classList.remove("open");
});

// Theme color switch
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Dark / Light mode toggle
const dayNight = document.querySelector(".day-night");
const dayNightIcon = dayNight.querySelector("i");
dayNight.addEventListener("click", () => {
  dayNightIcon.classList.toggle("bi-lightbulb-fill");
   dayNightIcon.classList.toggle("bi-lightbulb");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNightIcon.classList.add("fa-sun");
  } else {
    dayNightIcon.classList.add("fa-moon");
  }
});
