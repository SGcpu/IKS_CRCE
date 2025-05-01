// GSAP Animations for IKS_CRCE

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Detect page by barba namespace or URL
    const namespace = document.body.getAttribute('data-barba-namespace') || window.location.pathname.split('/').pop().split('.').shift();

    if (namespace === 'branches') {
        animateBranchesPage();
    } else if (namespace === 'media') {
        animateMediaPage();
    } else {
        animateHomePage();
    }

function animateHomePage() {
        // Removed main heading entrance animation to avoid navbar access issues

        // Animate Sanskrit text items staggered fade and slide from left
        gsap.from(".sanskrit-item", {
            scrollTrigger: {
                trigger: ".sanskrit_text",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 1,
            x: -100,
            opacity: 0,
            stagger: 0.3,
            ease: "power2.out"
        });

        // Animate image gallery slides fade on entrance (removed scale to avoid conflict with Swiper coverflow)
        gsap.from(".swiper-slide", {
            scrollTrigger: {
                trigger: ".image_gallery",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 1,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Animate syllabus topic cards with scroll-triggered fade and slide up
        gsap.from(".topic_card", {
            scrollTrigger: {
                trigger: ".iks_topics",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Add hover scale animation to syllabus topic cards
        document.querySelectorAll('.topic_card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power1.out" });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
            });
        });

        // Animate professor cards with scale and fade on scroll
        gsap.from(".professor_card", {
            scrollTrigger: {
                trigger: ".professors_section",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 1,
            scale: 0.8,
            opacity: 0,
            stagger: 0.3,
            ease: "power3.out"
        });

        // Animate footer elements fade in on scroll
        gsap.from("footer", {
            scrollTrigger: {
                trigger: "footer",
                start: "top 90%",
                toggleActions: "play none none none"
            },
            duration: 1.5,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        });

        // Optional: subtle floating animation for main heading
        // Removed floating animation on main heading to avoid navbar access issues
    }

    function animateBranchesPage() {
        // Animate branch sections fade and slide in
        gsap.from(".branch-section", {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.3,
            ease: "power3.out"
        });

        // Animate branch headers entrance
        gsap.from(".branch-header", {
            duration: 1,
            y: -30,
            opacity: 0,
            stagger: 0.3,
            ease: "power3.out"
        });

        // Animate topic divs with fade, slide up, and scale
        gsap.from(".topic", {
            duration: 1,
            y: 50,
            scale: 0.8,
            opacity: 0,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Animate topic headers entrance
        gsap.from(".topic-header", {
            duration: 0.8,
            x: -50,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        });

        // Animate topic-content and topic-text with fade and slide up on scroll
        gsap.utils.toArray(".topic-content, .topic-text").forEach(elem => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                duration: 1,
                y: 30,
                opacity: 0,
                ease: "power2.out"
            });
        });

        // Animate topic-content expand/collapse with GSAP
        document.querySelectorAll('.topic-header').forEach(header => {
            header.addEventListener('click', () => {
                const topic = header.parentElement;
                const content = topic.querySelector('.topic-content');
                const isActive = topic.classList.contains('active');

                if (isActive) {
                    // Collapse
                    gsap.to(content, {
                        height: 0,
                        padding: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                        onComplete: () => {
                            topic.classList.remove('active');
                            content.style.maxHeight = null;
                        }
                    });
                } else {
                    // Expand
                    topic.classList.add('active');
                    gsap.to(content, {
                        height: "auto",
                        padding: "15px",
                        duration: 0.5,
                        ease: "power2.inOut",
                        onComplete: () => {
                            content.style.maxHeight = "1000px";
                        }
                    });
                }
            });
        });

    }

    function animateMediaPage() {
        // Animate images with class "grid-img" and "carousel-img" with moving animation
        gsap.utils.toArray(".grid-img, .carousel-img").forEach(img => {
            gsap.to(img, {
                y: 20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: Math.random() * 2
            });
        });
    }
});
