/* =========================
   Scroll Reveal (일반 섹션)
========================= */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach(el => observer.observe(el));


/* =========================
   Mobile Nav Toggle
========================= */
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
  });
});


/* =========================
   GSAP / ScrollTrigger
========================= */
gsap.registerPlugin(ScrollTrigger);


/* =========================
   Recruit Section Title Move
========================= */
gsap.to(".recruit-title", {
  scrollTrigger: {
    trigger: ".recruit",
    start: "-10% center",
    end: "35% center",
    scrub: 1.2
  },
  x: -800,
  opacity: 0.3,
  ease: "none"
});


/* =========================
   Motivation Entrance
========================= */
gsap.from(".motivation-inner", {
  scrollTrigger: {
    trigger: ".motivation",
    start: "top 70%"
  },
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

