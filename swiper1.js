const swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  loop: true,
});

// Swiper #2
const swiper1 = new Swiper('.mySwiper1', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 300,
  coverflowEffect: {
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,
  sliderMove: 'event',
});

const swiper2 = new Swiper('.mySwiper3', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },

  loop: true,
});
