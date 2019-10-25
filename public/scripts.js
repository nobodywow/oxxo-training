document.addEventListener("DOMContentLoaded", () => {

    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };
    const lazyLoadImages = document.querySelectorAll('[data-src]');
    const lazyLoadBackgrounds = document.querySelectorAll('.lazy');
    const observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove('lazy');
                self.unobserve(image);
            }
        })
    }, config);
    [...lazyLoadImages, ...lazyLoadBackgrounds].forEach(item => {
        observer.observe(item);
    });
});

let slideIndex = 0;

const plusSlides = (offset) => {
    const slides = document.getElementsByClassName('slider__content');
    slides[slideIndex].style.display === 'none'
        ? slides[slideIndex].style.display = 'grid'
        : slides[slideIndex].style.display = 'none';

    if (offset === 0) {
        slideIndex = 0;
    } else {
        slideIndex = offset > 0
            ? slideIndex === slides.length - 1
                ? 0
                : slideIndex + offset
            : slideIndex === 0
                ? slides.length - 1
                : slideIndex + offset;
    }

    slides[slideIndex].style.display = 'grid';
}

plusSlides(0);







