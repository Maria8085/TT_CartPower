const swiperGalery = new Swiper('.galery .swiper-galery', {
    slidesPerView: "auto",
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.galery-button-next',
      prevEl: '.galery-button-prev',
    },
  });

const swiperCollection = new Swiper('.collection-slider .product-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: '.collection-button-next',
        prevEl: '.collection-button-prev',
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        }
    },
});

const swiperRecommendations = new Swiper('.recommendations-slider .product-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    navigation: {
        nextEl: '.recommendations-button-next',
        prevEl: '.recommendations-button-prev',
    },
    breakpoints: {
        1100: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4
        },
        450:{
            slidesPerView: 2
        }
    },
});

const burger = document.querySelector(".side-menu");
const menuList = document.querySelector(".header-menu-list");
function resizeHandler () {
    var windowWidth = window.innerWidth

    if (windowWidth > 768) {
        menuList.style.display = "flex";
    } else {
        menuList.style.display = "none";
    }
}
window.addEventListener('resize',resizeHandler);
burger.addEventListener('change',(event)=>{
    if (event.target.checked) {
        menuList.style.display = "flex";
    } else {
        menuList.style.display = "none";
    }
})

const userphone = document.querySelectorAll("[name='userphone']");
    userphone.forEach((e)=>{
		const maskTel = IMask(e, {
	        mask: '+{7}(000)000-00-00'
	    });
	});