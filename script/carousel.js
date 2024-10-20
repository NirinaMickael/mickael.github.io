const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Create an array of image URLs
    const imageUrls = [
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
        './assets/images/image.svg',
    ];

    // Create image elements dynamically and add to the carousel
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Carousel Image';
        carouselImages.appendChild(img);
    });

    const images = document.querySelectorAll('.carousel img');
    let index = 0;

    function showImage() {
        const offset = -index * 100; // Move by one image width (300px)
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 4;
        showImage();
    });

    nextButton.addEventListener('click', () => {
        index = (index < images.length - 4) ? index + 1 : 0;
        showImage();
    });