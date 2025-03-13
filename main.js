// Initialize Swiper
const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // Parameter for center active slide 
    centeredSlides: true,
    effect: 'coverflow',
    grabCursor: true,

    // Coverflow effect
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

// Initialize Swiper


// Mobile navigation functionality
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav_elements a");

// Toggle navigation menu on hamburger click
navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

// Close navigation menu when a link is clicked
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});

// Change navbar background on scroll (optional)
window.onscroll = function () {
    if (window.scrollY > 10) {
        document.querySelector(".navbar").style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
        document.querySelector(".navbar").style.boxShadow = "none";
    }
};/* 
(function () {
    document.onkeydown = function (e) {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || (e.ctrlKey && e.key === "U")) {
            return false;
        }
    };

    setInterval(() => {
        const devtools = /./;
        devtools.toString = function () {
            throw new Error("DevTools detected");
        };
        console.log("%c", devtools);
    }, 1000);
})();
document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && ["u", "s", "h", "i", "j"].includes(event.key.toLowerCase())) {
        event.preventDefault();
    }
}); */