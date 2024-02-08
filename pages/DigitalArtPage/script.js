document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'images/IMG2.jpg',
        'images/IMG3.jpg',
        'images/IMG4.jpg',
        'images/IMG5.jpg',
        'images/IMG6.jpg',
        'images/IMG7.jpg',
        'images/IMG8.jpg',
        'images/IMG9.jpg',
        'images/IMG10.jpg',
        'images/IMG11.jpg',
        'images/IMG12.jpg',
        'images/IMG13.jpg',
        'images/IMG14.jpg',
        'images/IMG15.jpg'
    ];

    const slideshowContainer = document.getElementById('slideshow-container');
    const nextArrow = document.getElementById('next-arrow');
    const prevArrow = document.getElementById('prev-arrow');

    images.forEach((imagePath, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Image ${index + 1}`;

        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    showSlide(currentIndex);

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextArrow.addEventListener('click', nextSlide);
    prevArrow.addEventListener('click', prevSlide);
});
