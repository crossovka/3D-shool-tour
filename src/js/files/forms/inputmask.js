/* Маски для полей (в работе) */

// Подключение списка активных модулей
import { flsModules } from '../modules.js';

// Подключение модуля
import 'inputmask/dist/inputmask.min.js';

// const inputMasks = document.querySelectorAll('input');
// if (inputMasks.length) {
// 	flsModules.inputmask = Inputmask().mask(inputMasks);
// }
const inputMasks = document.querySelectorAll('input[type="tel"]');
if (inputMasks.length) {
	inputMasks.forEach((input) => {
		Inputmask({
			mask: '+7 (999) 999-99-99',
			showMaskOnHover: false,
		}).mask(input);
	});
}
