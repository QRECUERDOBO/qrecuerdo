// Animaciones al scroll
document.addEventListener('DOMContentLoaded', function() {
    // Función para animaciones al scroll
    function revealOnScroll() {
        const elements = document.querySelectorAll('.video-card, .photo-card, .product-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Efecto parallax para el hero
    function parallaxEffect() {
        const hero
