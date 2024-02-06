document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'images/IMG2.png',
        'images/IMG3.png',
        'images/IMG4.png',
        'images/IMG5.jpg',
        'images/IMG6.png',
        'images/IMG7.png',
        'images/IMG8.jpg',
		'images/IMG9.png',
		'images/IMG10.png'
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
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    }

    nextArrow.addEventListener('click', nextSlide);

    prevArrow.addEventListener('click', prevSlide);
});
