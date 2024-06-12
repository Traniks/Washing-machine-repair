import Swiper from 'swiper'
import { Pagination, Navigation, Autoplay, Keyboard, EffectCoverflow } from 'swiper/modules'

const swiperFeedback = new Swiper('#feedback-slider', {
	modules: [Pagination, Navigation, EffectCoverflow],
	speed: 500,
	effect: 'coverflow',
	slidesPerView: '1',
	grabCursor: true,
	centeredSlides: true,
	rewind: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// type: 'fraction',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		scale: 0.8,
		modifier: 1,
		slideShadows: false,
	},
	breakpoints: {
		1260: {
			slidesPerView: '3',
		},
	},
})

// Функция для установки значения num в зависимости от размера экрана
function setNum() {
	if (window.innerWidth > 1260) {
		swiperFeedback.slideTo(1)
	} else {
		swiperFeedback.slideTo(0)
	}
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', setNum);
// Вызываем функцию при изменении размера окна
window.addEventListener('resize', setNum);


const swiperReviews = new Swiper('#reviews-slider', {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
})
const swiper2 = new Swiper('.mySwiper2', {
	modules: [Navigation],
	loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: swiper,
	},
})