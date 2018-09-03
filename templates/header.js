document.write('\
<header class="header">\
	<div class="header__location wrapper only-mobile">\
		<span>Наши контакты по</span> \
		<button class="header__location-button" type="button" data-tab="city:brest">Бресту</button>\
		<button class="header__location-button" type="button" data-tab="city:minsk">Минску</button>\
		<div class="header__phones-tab" data-tab="city:brest">\
			<ul class="header__phones ul-reset wrapper">\
				<li class="header__phones-item">\
					<a class="phone phone-velcom" href="tel:+375296901122">+375 (29) 690-11-22</a>\
				</li>\
				<li class="header__phones-item">\
					<a class="phone phone-mts" href="tel:+375336901122">+375 (33) 690-11-22</a>\
				</li>\
				<li class="header__phones-item">\
					<a class="phone phone-landline" href="tel:+375162555055">+375 (162) 55-50-55</a>\
				</li>\
			</ul>\
			<div class="header__work-time wrapper">С 9:00 до 21:00 без выходных</div>\
		</div>\
		<div class="header__phones-tab"\
			data-tab="city:minsk">\
			<ul class="header__phones ul-reset wrapper">\
				<li class="header__phones-item">\
					<a class="phone phone-velcom" href="tel:+375296901188">+375 (29) 690-11-88</a>\
				</li>\
				<li class="header__phones-item">\
					<a class="phone phone-mts" href="tel:+375336901188">+375 (33) 690-11-88</a>\
				</li>\
				<li class="header__phones-item">\
					<a class="phone phone-landline" href="tel:+375173453351">+375 (17) 345-33-51</a>\
				</li>\
			</ul>\
			<div class="header__work-time wrapper">С 9:00 до 21:00 без выходных</div>\
		</div>\
	</div>\
	<div class="header__information wrapper only-desktop">\
		<div class="header__information-tel">\
			<span class="header__phones-city">Брест:</span>\
			<ul class="header__phones ul-reset">\
				<li class="header__phones-item">\
					<a class="phone phone-velcom" href="tel:+375296901122">+375 (29) 690-11-22</a>\
				</li>\
				<li class="header__phones-item">\
					<a class="phone phone-mts" href="tel:+375336901122">+375 (33) 690-11-22</a>\
				</li>\
				<li class="header__phones-item">\
					<a class="phone phone-landline" href="tel:+375162555055">+375 (162) 55-50-55</a>\
				</li>\
			</ul>\
		</div>\
		<div\
			class="header__information-tel">\
			<span class="header__phones-city">Минск:</span>\
			<ul\
				class="header__phones ul-reset">\
				<li class="header__phones-item">\
					<a class="phone phone-velcom" href="tel:+375296901188">+375 (29) 690-11-88</a>\
				</li>\
				<li class="header__phones-item">\
					<a class="phone phone-mts" href="tel:+375336901188">+375 (33) 690-11-88</a>\
				</li>\
				<li class="header__phones-item">\
					<a class="phone phone-landline" href="tel:+375173453351">+375 (17) 345-33-51</a>\
				</li>\
			</ul>\
		</div>\
		<div class="header__work-time">\
			<b class="header__work-time-interval">С 9:00 до 21:00</b>\
			без выходных\
		</div>\
		<button type="button" class="btn header__feedback" data-modal="feedback">Заказать звонок</button>\
	</div>\
	<div class="header__panel">\
		<button class="hamburger only-mobile" type="button"></button>\
		<a href="index.html" class="logo">\
			<span class="logo-text">Сервис по замене автостекол</span>\
		</a>\
		<button class="header__search-button only-mobile" type="button" data-modal="search" onclick="searchField.focus()">\
		</button>\
		<div class="header__menu">\
			<nav class="header__menu-list">\
				<a class="header__menu-item-link" href="catalog.html">Каталог</a>\
				<a class="header__menu-item-link" href="">Услуги</a>\
				<a class="header__menu-item-link" href="">Галерея</a>\
				<a class="header__menu-item-link" href="">О компании</a>\
				<a class="header__menu-item-link" href="contacts.html">Схема проезда</a>\
			</nav>\
			<div class="header__work-time wrapper only-mobile">С 9:00 до 21:00 без выходных</div>\
		</div>\
		<form class="search-form only-desktop">\
			<input type="search" name="search" placeholder="Поиск..." class="header__search-input">\
			<input type="submit" class="search-submit input-submit-reset" value="">\
		</form>\
		<button class="btn feedback-btn only-mobile" type="button" data-modal="feedback">Заказать звонок</button>\
		<div class="modal modal-search wrapper">\
			<form class="search-form">\
				<input type="search" name="search" placeholder="Поиск..." class="modal-search__input" id="searchField">\
				<input type="submit" class="search-submit input-submit-reset" value="">\
				<button class="modal-close" type="button"></button>\
			</form>\
		</div>\
		<form class="modal modal-feedback wrapper">\
			<b class="feedback__title">Оставьте свое имя и номер телефона, чтобы заказать звонок</b>\
			<input type="text" name="name" placeholder="Введите имя" class="feedback__name">\
			<input type="tel" name="tel" placeholder="Введите номер телефона" class="feedback__tel">\
			<button class="feedback__submit input-submit-reset">Заказать звонок</button>\
			<button class="modal-close" type="button"></button>\
		</form>\
		<div class="modal modal__modal-success">\
			<button class="modal-close" type="button"></button>\
			<b class="modal-success-title">Спасибо за заявку!</b>\
			<span class="modal-success-text">Наши менеджеры скоро свяжутся с вами</span>\
		</div>\
	</div>\
</header>\
')