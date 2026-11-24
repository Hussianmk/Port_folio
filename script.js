
// Mobile navigation
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close menu after clicking a navigation link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Scroll progress indicator
const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage =
    scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  progress.style.width = percentage + "%";
});

// Footer current year
document.getElementById("year").textContent =
  new Date().getFullYear();
