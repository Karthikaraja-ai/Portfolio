/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [
    "Python Enthusiast",
    "Aspiring Full Stack Developer",
    "Computer Science Student",
    "Problem Solver",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {

        speed = 1500;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;

    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
".about, .skills, .projects, .contact, .card");

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

/* ==========================================
   HERO BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

/* ==========================================
   FLOATING LOGO EFFECT
========================================== */

const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", () => {

    logo.style.transform = "rotate(-3deg) scale(1.05)";

});

logo.addEventListener("mouseleave", () => {

    logo.style.transform = "rotate(0deg)";

});

/* ==========================================
   PROFILE IMAGE GLOW
========================================== */

const profile = document.querySelector(".hero-image img");

profile.addEventListener("mouseenter", () => {

    profile.style.boxShadow =
    "0 0 40px #38bdf8, 0 0 80px #38bdf8";

});

profile.addEventListener("mouseleave", () => {

    profile.style.boxShadow =
    "0 0 25px #38bdf8, 0 0 60px rgba(56,189,248,.35)";

});