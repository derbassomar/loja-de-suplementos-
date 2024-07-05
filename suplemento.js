document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicators = document.querySelectorAll('.carousel-indicator');

  let currentIndex = 0;

  const updateCarousel = () => {
    const translateX = -currentIndex * 100 + '%';
    carouselInner.style.transform = `translateX(${translateX})`;
  };

  const goToSlide = (index) => {
    currentIndex = index;
    updateCarousel();

    // Update indicator active state
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });

  // Initial update
  updateCarousel();
});