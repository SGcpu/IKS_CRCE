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