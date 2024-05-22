const swiperGalery = new Swiper('.swiper-galery', {
    slidesPerView: "auto",
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.galery-button-next',
      prevEl: '.galery-button-prev',
    },
  });

const swiperCollection = new Swiper('.collection-slider .product-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: '.collection-button-next',
        prevEl: '.collection-button-prev',
    },
});

const swiperRecommendations = new Swiper('.recommendations-slider .product-slider', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: '.recommendations-button-next',
        prevEl: '.recommendations-button-prev',
    },
});