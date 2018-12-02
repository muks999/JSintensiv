window.addEventListener('DOMContentLoaded', function () {
//Получаем инф для работы
	let products = document.querySelectorAll('.product'),
		button = document.getElementsByTagName("button"),
		open = document.getElementsByClassName('open')[0];
//функция для создания корзины
function createCart() {
	//Создаем элементы для корзины
	let cart = document.createElement('div'),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement('button');

	//Добавили классы элементам
	cart.classList.add('cart');
	field.classList.add('cart-field');
	close.classList.add('close');

	//Добавили текст к элементам
	close.textContent = 'Закрыть';
	heading.textContent = 'В нашей корзине';
	//Вставили элементы на страницу
	document.body.appendChild(cart);
	cart.appendChild(heading);
	cart.appendChild(field);
	cart.appendChild(close);
}

createCart();

let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close');

	for (let i = 0; i < button.length; i++) {
		//Вешаем обработчик клика на каждую из кнопок
		button[i].addEventListener('click', function () {
			//Создаем копию карточки товара
			let item =products[1].cloneNode(true), //клонируем элемент.true говорит о том что клонируется абсолютно все!
					btn =item.querySelector('button');
			btn.remove();
			field.appendChild(item);
			products[i].remove();
		});

	}
			function openCart() {
				cart.style.display = 'block'
			};

			function closeCart() {
				cart.style.display = 'none'
			};

			open.addEventListener('click', openCart);
			close.addEventListener('click', closeCart);


})