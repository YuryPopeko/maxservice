(() => { // closest polyfill
	if (!Element.prototype.closest) {
		Element.prototype.closest = function(css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}})();
(() => { // matches polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector
	}})();
(() => { // foreach polyfill
	if ('NodeList' in window && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = function (callback, thisArg) {
			thisArg = thisArg || window;
			for (var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}})();


document.addEventListener('click', (e) => {

	const target = e.target;

	if (target.closest('button[data-tab]')) toggleTab(target.closest('button[data-tab]'))

	else if (target.closest('button[data-modal]')) openModal(target.closest('button[data-modal]'))

	else if (target.closest('.modal-close') || target.closest('.overlay')) closeModal()

	else if (target.closest('.hamburger')) toggleHeaderMenu()

	else if (target.closest('.scheme__item')) toggleScheme(target.closest('.scheme__item'))

	else if (target.closest('.accordion__btn')) toggleAccordion(target.closest('.accordion__btn'))

	else if (target.closest('.go-back')) history.back()

	else if (target.closest('.contacts__btn[data-city]')) toggleContacts(target.closest('.contacts__btn[data-city]'))

	else if (target.closest('.contacts__transit-next')) detailTerritory(target.closest('.contacts__transit-next'), true)

	else if (target.closest('.contacts__transit-prev')) detailTerritory(target.closest('.contacts__transit-prev'), false)

});

function toggleTab(button) {

	const dataTab = button.dataset.tab.split(':');

	const open = dataTab.pop(),//вкладка
				group = dataTab[0];

	if (button.classList.contains('open')) {

		button.classList.remove('open');
		document.querySelector('[data-tab^=' + group + '].open').classList.remove('open')

	} else {

		document.querySelectorAll('[data-tab^=' + group + '].open').forEach((item) =>	item.classList.remove('open'))
		document.querySelector('[data-tab*=' + open + ']:not(button)').classList.toggle('open');
		button.classList.toggle('open')

	}

}

function openModal(button) {

	const modalWindow = document.querySelector('.modal-' + button.dataset.modal);

	document.body.classList.add('with-modal');
	modalWindow.classList.add('open');

	document.body.style.paddingRight = `${getScrollBarWidth()}px`;

	function getScrollBarWidth() {
		const div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		const scrollWidth = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);

		return scrollWidth
	}

}

function closeModal() {

	document.querySelector('.modal.open').classList.remove('open');
	document.body.classList.remove('with-modal');
	document.body.style.paddingRight = ''

}

function toggleHeaderMenu() {

	document.querySelector('.header__menu').classList.toggle('open')

}

function toggleScheme(elem) {

	if (elem.classList.contains('scheme__item_active')) return;

	const container = elem.parentElement;
	container.querySelector('.scheme__item_active').classList.remove('scheme__item_active');

	elem.classList.add('scheme__item_active');

}

function initMap() {

	initMap.coords = {
		brest: {lat: 52.14440399999999, lng: 23.661027500000046},
		minsk: {lat: 53.8495925, lng: 27.67065930000001}
	}

	const map = new google.maps.Map(document.getElementById('map'), {
		center: initMap.coords.brest,
		zoom: 12
	});

	var markerBrest = new google.maps.Marker({position: initMap.coords.brest, map: map}),
			markerMinsk = new google.maps.Marker({position: initMap.coords.minsk, map: map});

	const mapToggle = document.querySelector('.city-toggle');
	if (mapToggle) {
		mapToggle.addEventListener('click', function(e) {

			e = e || window.event;
			const target = e.target;
			const btn = target.closest('[data-city]');

			if (!btn || btn.classList.contains('city-toggle__btn_active')) return;
			this.querySelector('.city-toggle__btn_active').classList.remove('city-toggle__btn_active');
			map.setCenter(initMap.coords[btn.dataset.city]);
			btn.classList.add('city-toggle__btn_active')

		})
	}

}

function toggleAccordion(accordionBtn) {

	accordionBtn.classList.toggle('accordion__btn_active');
	const accordionContent = accordionBtn.parentElement.querySelector('.accordion__content');
	if (accordionContent.style.maxHeight) {
		accordionContent.style.maxHeight = null;
	} else {
		accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
	} 

}

(() => { // открыть активные аккордионы

	const accordionBtnActive = document.querySelectorAll('.accordion__btn_active');
	if (!accordionBtnActive.length) return;

	accordionBtnActive.forEach(item => {
		const accordionContent = item.parentElement.querySelector('.accordion__content');
		accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
	})

})();

function toggleContacts(btn) {

	const city = btn.dataset.city;

	document.querySelector('.contacts').dataset.city = city

}

function detailTerritory(btn, direct) {
	const container = btn.parentElement,
				point = +container.dataset.point;
	container.dataset.point = direct ? point + 1 : point - 1
}

// console.log();