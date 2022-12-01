var swiper = new Swiper('.swiper-container', {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  history: {
    key: 'slide',
  },
});