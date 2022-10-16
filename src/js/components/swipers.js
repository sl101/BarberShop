
const teamSwiper = new Swiper('.team__swiper', {
	
	wrapperClass: 'swiper-team__wrapper',
	slideClass: 'swiper-team__slide',

  navigation: {
		nextEl: '.swiper-team__arrow--next',
		prevEl: '.swiper-team__arrow--prev',
  }, 

	pagination: {
		el: '.swiper-team__pagination',
		clickable: true,
		type: 'bullets',
	},
	
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDow: true,
	},

	initialSlide: 1,
	slideToClickedSlide: true,
	speed: 500,
	spaceBetween: 50,
	slidesPerGroup: 1, 
	slidesPerView: 'auto', 
	centeredSlides: true,
	
	breakpoints: {
		480: {
			spaceBetween: 31,
			slidesPerView: 'auto', 
		},
		768: { 
			slidesPerView: 4, 
			spaceBetween: 39,
		},
		992: {
			slidesPerView: 4, 
			spaceBetween: 39,
		},
		1200: { 
			slidesPerView: 4, 
			spaceBetween: 31,
		},
	},
});

const reviewSwiper = new Swiper('.review__swiper', {
	
	wrapperClass: 'swiper-team__wrapper',
	slideClass: 'swiper-team__slide',

  navigation: {
		nextEl: '.swiper-team__arrow--next',
		prevEl: '.swiper-team__arrow--prev',
  }, 

	pagination: {
		el: '.swiper-team__pagination',
		clickable: true,
		type: 'bullets',
	},
	
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDow: true,
	},

	initialSlide: 1,
	slideToClickedSlide: true,
	speed: 500,
	spaceBetween: 50,
	slidesPerGroup: 1, 
	slidesPerView: 'auto', 
	centeredSlides: true,
	
	breakpoints: {
		480: {
			spaceBetween: 31,
			slidesPerView: 'auto', 
		},
		768: { 
			slidesPerView: 4, 
			spaceBetween: 39,
		},
		992: {
			slidesPerView: 4, 
			spaceBetween: 39,
		},
		1200: { 
			slidesPerView: 4, 
			spaceBetween: 31,
		},
	},
});


const productSwiper = new Swiper('.product-swiper', {

	wrapperClass: 'product-swiper__wrapper',
	slideClass: 'product-swiper__slide',

	navigation: {
		nextEl: '.product-swiper__arrow--next',
		prevEl: '.product-swiper__arrow--prev',
  }, 

	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 6,
	
	breakpoints: {
		769.98: {
			watchOverflow: true,
		},
	},

});

const shopSwiper = new Swiper('.shop-swiper', {

	wrapperClass: 'shop-swiper__wrapper',
	slideClass: 'shop-swiper__slide',

	navigation: {
		nextEl: '.shop-swiper__arrow--next',
		prevEl: '.shop-swiper__arrow--prev',
  }, 

	speed: 900,
	slidesPerView: 1,
	slidesPerGroup: 1,
	centeredSlides: true,
	loop: true,
});


// swiperTabs============================
let teamSwiperSlides = teamSwiper.slides;
let reviewSwiperSlides = reviewSwiper.slides;

teamSwiper.on('slideChange' , function () {
	teamSwiper.updateSlidesClasses();
	let descriptionItems = document.querySelectorAll(".description__item");

	for (let index = 0; index < teamSwiperSlides.length; index++) {
		let element = teamSwiperSlides[index];
		element.classList.remove('tab_active');
		descriptionItems[index].classList.remove('tab_active');

		if(element.classList.contains('swiper-slide-active')){
			element.classList.add('tab_active');
			descriptionItems[index].classList.add('tab_active');
		}
	}
});

reviewSwiper.on('slideChange' , function () {
	reviewSwiper.updateSlidesClasses();
	let descrParent = document.querySelector('.review__description');
	let descriptionItems = descrParent.children;

	for (let index = 0; index < reviewSwiperSlides.length; index++) {
		let element = reviewSwiperSlides[index];
		element.classList.remove('tab_active');
		descriptionItems[index].classList.remove('tab_active');

		if(element.classList.contains('swiper-slide-active')){
			element.classList.add('tab_active');
			descriptionItems[index].classList.add('tab_active');
		}
	}
});
// ====================================


