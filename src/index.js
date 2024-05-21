const swiperGalery = new Swiper('.swiper-galery', {
    slidesPerView: "auto",
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.galery-button-next',
      prevEl: '.galery-button-prev',
    },
  });