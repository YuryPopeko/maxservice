document.addEventListener('click', (e) => {

	e = e || window.event;
	const target = e.target;

	if (target.closest('button[data-tab]')) toggleTab(target.closest('button[data-tab]'))

	if (target.closest('button[data-modal]')) openModal(target.closest('button[data-modal]'))

	if (target.closest('.modal-close') || target.closest('.overlay')) closeModal()

	if (target.closest('.hamburger')) toggleHeaderMenu()

	if (target.closest('.scheme__item')) toggleScheme(target.closest('.scheme__item'))

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

// console.log();