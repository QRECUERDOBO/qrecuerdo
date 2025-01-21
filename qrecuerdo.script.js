// Animación suave al scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de entrada para elementos
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.video-item, .photo-item, .feature-item, .product-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Lazy loading para videos
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('mouseenter', function() {
        if (this.getAttribute('data-src')) {
            this.src = this.getAttribute('data-src');
            this.remove
