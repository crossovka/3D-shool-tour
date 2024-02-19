
// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
var mapTitle = document.createElement('div');
mapTitle.className = 'mapTitle';
// вписываем нужный нам текст внутрь элемента
mapTitle.textContent = 'Для активации карты нажмите по ней';
// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
wrapMap.appendChild(mapTitle);
// по клику на карту
wrapMap.onclick = function () {
	// убираем атрибут "style", в котором прописано свойство "pointer-events"
	this.children[0].removeAttribute('style');
	// удаляем элемент с интерактивной подсказкой
	mapTitle.parentElement.removeChild(mapTitle);
};
// по движению мыши в области карты
wrapMap.onmousemove = function (event) {
	// показываем подсказку
	mapTitle.style.display = 'block';
	// двигаем подсказку по области карты вместе с мышкой пользователя
	if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
	if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
};
// при уходе указателя мыши с области карты
wrapMap.onmouseleave = function () {
	// прячем подсказку
	mapTitle.style.display = 'none';
};

/* GOOGLE
function mapAdd() {
	let tag = document.createElement('script');
	tag.src = "https://maps.google.com/maps/api/js?sensor=false&amp;key=&callback=mapInit";
	let firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
function mapInit(n = 1) {
	google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
		var map = this;
		var ov = new google.maps.OverlayView();
		ov.onAdd = function () {
			var proj = this.getProjection();
			var aPoint = proj.fromLatLngToContainerPixel(latlng);
			aPoint.x = aPoint.x + offsetX;
			aPoint.y = aPoint.y + offsetY;
			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
			//map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
		}
		ov.draw = function () { };
		ov.setMap(this);
	};
	var markers = new Array();
	var infowindow = new google.maps.InfoWindow({
		//pixelOffset: new google.maps.Size(-230,250)
	});
	var locations = [
		[new google.maps.LatLng(53.819055, 27.8813694)],
		[new google.maps.LatLng(53.700055, 27.5513694)],
		[new google.maps.LatLng(53.809055, 27.5813694)],
		[new google.maps.LatLng(53.859055, 27.5013694)],
	]
	var options = {
		zoom: 10,
		panControl: false,
		mapTypeControl: false,
		center: locations[0][0],
		styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }],
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map'), options);
	var icon = {
		url: 'img/icons/map.svg',
		scaledSize: new google.maps.Size(18, 20),
		anchor: new google.maps.Point(9, 10)
	}
	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			icon: icon,
			position: locations[i][0],
			map: map,
		});
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				for (var m = 0; m < markers.length; m++) {
					markers[m].setIcon(icon);
				}
				var cnt = i + 1;
				//infowindow.setContent(document.querySelector('.events-map__item_' + cnt).innerHTML);
				//infowindow.open(map, marker);
				marker.setIcon(icon);
				map.setCenterWithOffset(marker.getPosition(), 0, 0);
				setTimeout(function () {

				}, 10);
			}
		})(marker, i));
		markers.push(marker);
	}
	if (n) {
		var nc = n - 1;
		setTimeout(function () {
			google.maps.event.trigger(markers[nc], 'click');
		}, 500);
	}
}
if (document.querySelector('#map')) {
	mapAdd();
}
*/

/* YA
function map(n) {
	ymaps.ready(init);
	function init() {
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			controls: [],
			center: [43.585525, 39.723062],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 10
		});

		let myPlacemark = new ymaps.Placemark([43.585525, 39.723062], {
		},{
			// Опции.
			//balloonContentHeader: 'Mistoun',
			//balloonContentBody: 'Москва, Николоямская 40с1',
			//balloonContentFooter: '+ 7(495) 507-54 - 90',
			//hasBalloon: true,
			//hideIconOnBalloonOpen: true,

			hasBalloon: false,
			hideIconOnBalloonOpen: false,
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/map.svg',
			// Размеры метки.
			iconImageSize: [40, 40],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-20, -20],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [0, 0],
		});
		myMap.geoObjects.add(myPlacemark);

		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
	}
}
*/


// html разметочка и стили ДЛЯ КОНСТРУКТОРА КАРТ ЯНДЕКС ======================================================================================================================================================================================================================
// <!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A23b533c99c735d2ea7ad888d7838e154ac3e997a7b4170ea29f16ec90764f3ec&amp;width=100%&amp;height=720&amp;lang=ru_RU&amp;scroll=false"></script> -->
// 						<iframe style="pointer-events: none;" src="https://yandex.ru/map-widget/v1/?um=constructor%3A730fad67c743017b7282301a4f00ddc944eaf96fbe39b56ae9d46fdb0fe07b5e&amp;source=constructor" width="100%" height="720" frameborder="0"></iframe>
// 						<style>
// 							#wrapMap {
// 								 position: relative;
// 								 cursor: help;
// 								 overflow: hidden;
// 								 border-width: 1px;
// 								 border-style: solid;
// 								 border-color: rgb(204, 204, 204);
// 								 border-image: initial;
// 							}
// 							.mapTitle {
// 								 position: absolute;
// 								 z-index: 1000;
// 								 box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px;
// 								 display: none;
// 								 padding: 5px 20px;
// 								 border-radius: 5px;
// 								 background: rgb(255, 255, 255);
// 								 border-width: 1px;
// 								 border-style: solid;
// 								 border-color: rgb(204, 204, 204);
// 								 border-image: initial;
// 							}
// 						</style>
// html разметочка и стили======================================================================================================================================================================================================================