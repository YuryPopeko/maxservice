document.addEventListener('click', (e) => {

	e = e || window.event;
	const target = e.target;

	if (target.closest('button[data-tab]')) toggleTab(target.closest('button[data-tab]'))

	if (target.closest('button[data-modal]')) openModal(target.closest('button[data-modal]'))

	if (target.closest('.modal-close') || target.closest('.overlay')) closeModal()

	if (target.closest('.hamburger')) toggleHeaderMenu()

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

// console.log();