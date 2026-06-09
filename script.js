  function applyTheme(isDark) {

    const icon = document.getElementById("theme-icon");

    document.body.classList.toggle("dark", isDark);

    icon.innerHTML = isDark
      ? `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10Z"
        stroke="currentColor" stroke-width="2"/>
      </svg>
    `
      : `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>

        <path d="M12 2v2" stroke="currentColor" stroke-width="2"/>
        <path d="M12 20v2" stroke="currentColor" stroke-width="2"/>

        <path d="M4 12h2" stroke="currentColor" stroke-width="2"/>
        <path d="M18 12h2" stroke="currentColor" stroke-width="2"/>

        <path d="M5 5l1.5 1.5" stroke="currentColor" stroke-width="2"/>
        <path d="M17.5 17.5l1.5 1.5" stroke="currentColor" stroke-width="2"/>

        <path d="M5 19l1.5-1.5" stroke="currentColor" stroke-width="2"/>
        <path d="M17.5 6.5l1.5-1.5" stroke="currentColor" stroke-width="2"/>
      </svg>
    `;

  }

  function toggleTheme() {

    const isDark = !document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    applyTheme(isDark);

  }

  document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    applyTheme(savedTheme === "dark");

  });

  function openModal(src) {

    const modal = document.getElementById("certificateModal");
    const img = document.getElementById("modalImage");

    img.src = src;

    modal.style.display = "flex";

  }

  function closeModal() {

    document.getElementById("certificateModal").style.display = "none";

  }

  document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("certificateModal");

    modal.addEventListener("click", (e) => {

      if (e.target === modal) {
        closeModal();
      }

    });

  });

  function revealOnScroll() {

    const elements = document.querySelectorAll('.reveal');

    elements.forEach(el => {

      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        el.classList.add("active");
      }

    });

  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });

  const glow = document.querySelector(".cursor-glow");
  const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";

});