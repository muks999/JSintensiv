let chooseBtn = document.getElementById('choose'),
		receiveBtn = document.getElementById('receive'),
		heading = document.getElementsByTagName('h2')[0], //в [] указан порядковый номер тега (даже если элемент 1 на странице)
		nameInput = document.getElementsByClassName('contactform_name')[0],
		phoneInput = document.querySelector('.contactform_phone'), //выбор по селектору CSS т.е. нужна точка и береться первый класс который встретится
		mailInput = document.querySelectorAll('.contactform_mail')[0],
		modal = document.querySelector('.modal'),
		close = document.querySelector('.close'),
		textArea = document.querySelector('textarea');

		function hover() {
			heading.textContent = "Действительно ВСЁ!"
		};
		function out() {
			heading.textContent = "Все включено!"
		};
		heading.addEventListener("mouseenter", hover);

		heading.addEventListener("mouseleave", out);

		receiveBtn.addEventListener('click', function () {
			modal.style.display = 'block';
		})

		close.addEventListener('click', function () {
			modal.style.display = 'none';
		})

		nameInput.addEventListener('input', function () {
			textArea.value = "Меня зовут " + nameInput.value + "и я хочу спросить:"

			if (nameInput.value == "") {  //если поле имени пустое
				textArea.value = "" //то очищаем сообщение
			}
		})