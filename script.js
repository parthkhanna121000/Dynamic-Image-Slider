let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const totalSlides = slides.length;

  // Loop back to the beginning or end
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  // Slide to the specified index
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function goToSlide(index) {
  showSlide(index);
}

// Auto Slide
setInterval(() => {
  nextSlide();
}, 5000); // Change image every 5 seconds
