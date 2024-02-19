// // Подключение функционала "Чертогов Фрилансера"
// import { isMobile, removeClasses } from './functions.js';
// // Подключение списка активных модулей
// import { flsModules } from './modules.js';

// window.onload = function () {
// 	document.addEventListener('click', documentActions);

// 	// Actions (делегирование события click)
// 	// прослушживается весь документ, вычисляюются нужные объекты и работет с ними
// 	function documentActions(e) {
// 		// присваиваю нажатый объект
// 		const targetElement = e.target;
// 	}

// 	// Header
// 	const headerElement = document.querySelector('.header');

// 	const callback = function (entries, observer) {
// 		if (entries[0].isIntersecting) {
// 			headerElement.classList.remove('_scroll');
// 		} else {
// 			headerElement.classList.add('_scroll');
// 		}
// 	};

// 	// отлавливаю проскроленные пиксели и момент, когда проскролено достаточно px
// 	const headerObserver = new IntersectionObserver(callback);
// 	headerObserver.observe(headerElement);
// };