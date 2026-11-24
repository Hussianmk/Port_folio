
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


// Smooth reveal animation when sections enter the screen

const revealElements = document.querySelectorAll(
  '.section, .project-card, .timeline-item, .contact'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

