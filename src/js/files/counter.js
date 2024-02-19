window.addEventListener('load', windowLoad);
// 'use strict';
function windowLoad() {
	// инициализация
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems
			? digitsCountersItems
			: document.querySelectorAll('[data-digits-counter]');
		if (digitsCounters) {
			digitsCounters.forEach((digitsCounter) => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
	// функция анимации
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter)
			? parseInt(digitsCounter.dataset.digitsCounter)
			: 1000;
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;

		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(
				progress * (startPosition + startValue)
			);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	// Запуск анимации после загрузки страницы
	// digitsCountersInit();

	// Запуск анимации после доскроливания до элемента с дата атрибуутом data-digits-counter
	let options = {
		threshold: 0.3
		// элемент будет считаться пересекающимся, если он пересекает область видимости на 30% или более.
	}
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const targetElement = entry.target;
				const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
				if (digitsCountersItems.length) {
					digitsCountersInit(digitsCountersItems);
				}
				observer.unobserve(targetElement);
			}
		});
	}, options);

	let sections = document.querySelectorAll('.page__');
	if (sections.length) {
		sections.forEach(section => {
			observer.observe(section);
		});
	}
}
