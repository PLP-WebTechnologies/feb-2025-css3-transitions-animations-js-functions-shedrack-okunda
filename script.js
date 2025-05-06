const animateBtn = document.getElementById("animateBtn");
const saveThemeBtn = document.getElementById("saveThemeBtn");

// Trigger animation on click
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("animate");
  setTimeout(() => {
    animateBtn.classList.remove("animate");
  }, 500);
});

// Toggle theme and store preference
saveThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("preferredTheme", isDark ? "dark" : "light");
});

// Load theme preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("preferredTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
