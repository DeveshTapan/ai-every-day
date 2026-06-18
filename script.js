const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const currentPage = document.body.dataset.page;
const toast = document.querySelector(".toast");

if (window.lucide) lucide.createIcons();

document.querySelector(`[data-nav="${currentPage}"]`)?.classList.add("active");

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 12);
});

menuButton?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

document.querySelectorAll(".copy-prompt").forEach((button) => {
  button.addEventListener("click", async () => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(button.dataset.prompt);
      copied = true;
    } catch {}
    if (!copied) {
      const field = document.createElement("textarea");
      field.value = button.dataset.prompt;
      field.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(field);
      field.select();
      copied = document.execCommand("copy");
      field.remove();
    }
    if (toast) {
      toast.textContent = copied ? "Prompt copied" : "Copy unavailable";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1600);
    }
  });
});
