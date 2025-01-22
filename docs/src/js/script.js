// Select icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Get theme from localStorage or system preference
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Toggle icons
const iconToggle = () => {
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
};

// Check and set theme
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("hidden");
    return;
  }
  sunIcon.classList.add("hidden");
};

// Switch themes
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// Event listeners
sunIcon.addEventListener("click", themeSwitch);
moonIcon.addEventListener("click", themeSwitch);

// Initialize theme
themeCheck();
