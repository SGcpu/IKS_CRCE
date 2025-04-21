// Initialize Swiper and other functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
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
        
        // Add autoplay functionality
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

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

    // Mobile navigation functionality - used on all pages
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav_elements a");

    // Toggle navigation menu on hamburger click
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            document.body.classList.toggle("nav-open");
        });
    }

    // Close navigation menu when a link is clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("nav-open");
        });
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const navbar = document.querySelector('header, nav, .navbar, #navbar'); // Adjust selector
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top/navbar
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Try to scroll to navbar if found, otherwise to top
            if (navbar) {
                navbar.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            // For accessibility - return focus if needed
            this.blur();
        });
    }
});

// Change navbar background on scroll
window.onscroll = function () {
    if (window.scrollY > 10) {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    } else {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            navbar.style.boxShadow = "none";
        }
    }
};

// Security measures (consider if these are actually needed)
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
});