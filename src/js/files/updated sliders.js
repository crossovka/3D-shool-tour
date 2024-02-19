/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Полный набор стилей из node_modules
// import 'swiper/css';
// import { lgZoom } from 'lightgallery/plugins/zoom/lg-zoom.min.js';
// import { Swiper } from 'swiper';

function initSliders() {
	if (document.querySelector('.swiper-hero')) {
		new Swiper('.swiper-hero', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			// modules: [Navigation, Pagination],
			direction: 'horizontal',
			// initialSlide: 2,
			observer: true,
			observeParents: true,
			direction: 'horizontal',
			slidesPerView: 1,
			// freeMode: true,
			// spaceBetween: 32,
			// watchOverflow: true,
			speed: 800,
			loop: true,
			// loopAdditionalSlides: 5,

			// slidesPerGroup: 1,
			// preloadImage: false,
			// parallax: true,
			// autoHeight: true,

			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
				// Эффекты
				effect: 'fade',
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				*/

			// Пагинация

			// pagination: {
			// 	el: '.controls-slider-main__dots',
			// 	clickable: true,
			// },

			// Скроллбар
			/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

			// Кнопки "влево/вправо"
			navigation: {
				nextEl: '.swiper-hero .swiper-button-next',
			},

			// Брейкпоинты

			// breakpoints: {
			// 	991.98: {
			// 		slidesPerView: 1.00001,
			// 		// spaceBetween: 0,
			// 		// autoHeight: true,
			// 	},
			// 	// 768: {
			// 	// 	slidesPerView: 2,
			// 	// 	spaceBetween: 20,
			// 	// },
			// 	// 992: {
			// 	// 	slidesPerView: 3,
			// 	// 	spaceBetween: 20,
			// 	// },
			// 	// 1268: {
			// 	// 	slidesPerView: 4,
			// 	// 	spaceBetween: 30,
			// 	// },
			// },

			// События
			// on: {},
		});
	}

	// slider with filtration ==============================================================================
	/*
		<nav class="controls-events__categories categories d-flex" data-da=".events__showmore,767.98">
			<button type="button" data-filter="all">Все</button>
			<button type="button" data-filter="important">Важное</button>
			<button type="button" data-filter="news">Новости</button>
			<button type="button" data-filter="useful">Полезное</button>
		</nav>
	*/
	/*
	if (document.querySelector('.slider-events')) {
		var swiper = new Swiper('.slider-events', {
			slidesPerView: 1.2,
			spaceBetween: 30,
			loop: true,
			navigation: {
				prevEl: '.events .slider-arrow__prev',
				nextEl: '.events .slider-arrow__next',
			},
			breakpoints: {
							320: {
								slidesPerView: 1.2,
								spaceBetween: 30,
							},
							767.98: {
								slidesPerView: 3.3,
								spaceBetween: 30,
							},
							991.98: {
								slidesPerView: 4,
								spaceBetween: 30,
							},
							// 1268: {
							// 	slidesPerView: 4,
							// 	spaceBetween: 30,
							// },
						},
		});

		document.querySelectorAll('.controls-events__categories button').forEach(function (element) {
				element.addEventListener('click', function () {
					var filter = this.getAttribute('data-filter');
					document.querySelectorAll('.controls-events__categories button').forEach(function (element) {
							element.classList.remove('active');
						});
					this.classList.add('active');

					if (filter === 'all') {
						document
							.querySelectorAll('.slider-events__slide')
							.forEach(function (element) {
								element.style.display = 'block';
							});
					} else {
						document
							.querySelectorAll('.slider-events__slide')
							.forEach(function (element) {
								var dataFilter = element.getAttribute('data-filter');
								if (dataFilter === filter) {
									element.style.display = 'block';
								} else {
									element.style.display = 'none';
								}
							});
					}
					swiper.update();
				});
			});
	}
	*/
	// slider with filtration END ==========================================================================
	
	/*
	dynamic slider initilization ========================================================================
		const sliderContainer = document.querySelector('.slider-steps');
		let swiperInstance = null;

		function setupClassesForSwiper(enable) {
				const sliderSlides = sliderContainer.querySelectorAll('.slider-steps__slide');
				const sliderProgressbar = sliderContainer.querySelector('.slider-steps__progressbar');
				const sliderBody = sliderContainer.querySelector('.slider-steps__body');
		
				if (enable) {
					sliderContainer.classList.add('swiper-container');
					sliderSlides.forEach(slide => slide.classList.add('swiper-slide'));
					sliderProgressbar.classList.add('swiper-pagination');
					sliderBody.classList.add('swiper-wrapper');
				} else {
					sliderContainer.classList.remove('swiper-container');
					sliderSlides.forEach(slide => slide.classList.remove('swiper-slide'));
					sliderProgressbar.classList.remove('swiper-pagination');
					sliderBody.classList.remove('swiper-wrapper');
				}
		}

		function enableSlider() {
			setupClassesForSwiper(true);
			swiperInstance = new Swiper('.slider-steps', {
				slidesPerView: 1,
				spaceBetween: 20,
				// loop: true,
				direction: 'horizontal',
				speed: 800,
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
			});
		}

		function disableSlider() {
			if (swiperInstance) {
				swiperInstance.destroy(true, true);
				swiperInstance = null;
				setupClassesForSwiper(false); // Disable classes after destroying swiper
			}
		}

		const matchMediaQuery = window.matchMedia('(max-width: 767.98px)');

		function handleMatchMediaChange(e) {
			if (e.matches) {
				enableSlider();
			} else {
				disableSlider();
			}
		}

		handleMatchMediaChange(matchMediaQuery); // Check on initial load
		matchMediaQuery.addListener(handleMatchMediaChange);
	*/
	// dynamic slider initilization END ========================================================================
};

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
// };

window.addEventListener('DOMContentLoaded', function (e) {
	initSliders();
});
