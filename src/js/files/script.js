window.onload = function () {
	console.log('Page loaded');

	const iframe = document.querySelector('iframe');
	if (iframe) {
		const button1 = document.getElementById('1btn');
		const button2 = document.getElementById('2btn');
		const button3 = document.getElementById('3btn');

		// if (button1) {
		// 	button1.addEventListener('click', function () {
		// 		iframe.src = '1tour.html';
		// 	});
		// }
		// if (button2) {
		// 	button2.addEventListener('click', function () {
		// 		iframe.src = '2tour.html';
		// 	});
		// }
		// if (button3) {
		// 	button3.addEventListener('click', function () {
		// 		iframe.src = '3tour.html';
		// 	});
		// }
		if (button1) {
			button1.addEventListener('click', function () {
				iframe.src = '1tour.html';
				button1.classList.add('_active');
				button2.classList.remove('_active');
				button3.classList.remove('_active');
			});
		}

		if (button2) {
			button2.addEventListener('click', function () {
				iframe.src = '2tour.html';
				button2.classList.add('_active');
				button1.classList.remove('_active');
				button3.classList.remove('_active');
			});
		}

		if (button3) {
			button3.addEventListener('click', function () {
				iframe.src = '3tour.html';
				button3.classList.add('_active');
				button1.classList.remove('_active');
				button2.classList.remove('_active');
			});
		}
	}

	// const fullscreenButtons = document.querySelectorAll('.tour__fullscreen');
	// fullscreenButtons.forEach((button) => {
	// 	button.addEventListener('click', function () {
	// 		console.log('Fullscreen button clicked');
	// 		const tourFrame = this.closest('.tour__frame');
	// 		if (tourFrame) {
	// 			const tourIframe = tourFrame.querySelector('.tour__iframe');
	// 			console.log('Toggling fullscreen class for button and iframe');
	// 			this.classList.replace('_icon-fullscreen', '_icon-telegram"');
	// 			this.classList.toggle('fullscreen');
	// 			tourIframe.classList.toggle('_fullscreen');
	// 		}
	// 	});
	// });
	const tourIframe = document.querySelector('.tour__iframe');
	const fullscreenButton = document.querySelector('.tour__fullscreen');
	
	if (tourIframe && fullscreenButton) {
		fullscreenButton.addEventListener('click', function () {
			console.log('Fullscreen button clicked');
			console.log('Toggling fullscreen class for button and iframe');
			tourIframe.classList.toggle('_fullscreen');
			this.classList.toggle('_icon-fullscreen');
			this.classList.toggle('_icon-fullscreened');
		});
	}

	// Остальная часть кода
	const headerElement = document.querySelector('.header');
	const callback = function (entries, observer) {
		console.log('Header intersection observed');
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	console.log('Observing header intersection');
	headerObserver.observe(headerElement);
	console.log('Header intersection observer added');
};
