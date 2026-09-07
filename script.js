const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav a");
const scrollTop = document.getElementById("scrollTop");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  scrollTop.style.display = window.scrollY > 500 ? "block" : "none";
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();
