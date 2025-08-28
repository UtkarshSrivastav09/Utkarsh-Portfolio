let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

let darkModeIcon = document.querySelector("#darkMood-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".heading");

ScrollReveal().reveal(".home-content,.heading", { orgin: "top" });
ScrollReveal().reveal(
  ".home-img img,.skills-container,.portfolio-box,.testimonial-wrapper,.contact form ",
  { orgin: "bottom" }
);

ScrollReveal().reveal(".home-content h1 img,.about-img img", { orgin: "left" });
ScrollReveal().reveal(".home-content h3 img,..home-content p", {
  orgin: "right",
});

// animation text script code
document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Java Devloper.", "Backend Developer.", "Content Creater!"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    };

    var typed = new Typed("#typed-output", options);
});
