document.addEventListener('click', (e) => {

	e = e || window.event;
	const target = e.target;

	if (target.closest('button[data-tab]')) toggleTab(target.closest('button[data-tab]'))

	else if (target.closest('button[data-modal]')) openModal(target.closest('button[data-modal]'))

	else if (target.closest('.modal-close') || target.closest('.overlay')) closeModal()

	else if (target.closest('.hamburger')) toggleHeaderMenu()

	else if (target.closest('.scheme__item')) toggleScheme(target.closest('.scheme__item'))

	else if (target.closest('.accordion__btn')) toggleAccordion(target.closest('.accordion__btn'))

	else if (target.closest('.go-back')) history.back()

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
	modalWindow.classList.add('open')

}

function closeModal() {

	document.querySelector('.modal.open').classList.remove('open');
	document.body.classList.remove('with-modal')

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

var brest = {lat: 52.14440399999999, lng: 23.661027500000046},
		minsk = {lat: 53.8495925, lng: 27.67065930000001};

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
		center: brest,
		zoom: 12
	});

	var markerBrest = new google.maps.Marker({position: brest, map: map}),
			markerMinsk = new google.maps.Marker({position: minsk, map: map});

	document.querySelector('.map__toggle').addEventListener('click', function(e) {

		e = e || window.event;
		const target = e.target;
		const btn = target.closest('.map__btn');

		if (!btn || btn.classList.contains('map__btn_active')) return;
		this.querySelector('.map__btn_active').classList.remove('map__btn_active');
		map.setCenter(window[btn.dataset.city]);
		btn.classList.add('map__btn_active')

	})

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

// console.log();