document.documentElement.classList.add("js");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Header shadow once the page scrolls
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
}

toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// Fade cards in as they scroll into view
const revealed = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealed.forEach((el) => io.observe(el));
} else {
  revealed.forEach((el) => el.classList.add("visible"));
}

// Aura farming station
const auraEvents = [
  [67, "you ran a model locally. 6 7."],
  [100, "you said \"it depends on the dataset.\" very wise."],
  [-200, "you pasted your API key in the group chat."],
  [300, "your loss curve actually went down."],
  [-67, "you called it \"the AI\" out loud."],
  [150, "you mewed through the whole lecture."],
  [-500, "you trained on the test set. cooked."],
  [250, "Tung Tung Tung Sahur approved your pull request."],
  [999, "you stayed in power longer than your context window. Bibi-tier."],
  [-120, "you fanum taxed the club pizza."],
  [61, "you secured a coalition majority for your project idea."],
  [-300, "your model crossed the red line."],
];
const auraCount = document.getElementById("aura-count");
const auraMsg = document.getElementById("aura-msg");
const auraTotal = auraCount.parentElement;
let aura = 0;
let lastAura = -1;

document.getElementById("aura-btn").addEventListener("click", () => {
  let i;
  do { i = Math.floor(Math.random() * auraEvents.length); } while (i === lastAura);
  lastAura = i;
  const [delta, why] = auraEvents[i];
  aura += delta;
  auraCount.textContent = aura.toLocaleString();
  auraMsg.textContent = `${delta > 0 ? "+" : ""}${delta} aura: ${why}`;
  auraTotal.classList.toggle("down", aura < 0);
  auraTotal.classList.remove("aura-pop");
  void auraTotal.offsetWidth;
  auraTotal.classList.add("aura-pop");
});

// Highlight the nav link for the section on screen
const links = [...nav.querySelectorAll('a[href^="#"]:not(.btn)')];
const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));
}
