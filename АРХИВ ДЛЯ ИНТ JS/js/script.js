let chooseBtn = document.getElementById('choose'),
		receiveBtn = document.getElementById('receive'),
		heading = document.getElementsByTagName('h2')[0], //в [] указан порядковый номер тега (даже если элемент 1 на странице)
		nameInput = document.getElementsByClassName('contactform_name')[0],
		phoneInput = document.querySelectorAll('.contactform_phone')[1], //выбор по селектору CSS т.е. нужна точка и береться первый класс который встретится
		mailInput = document.querySelectorAll('.contactform_mail')[0],
		modal = document.querySelector('.modal'),
		close = document.querySelector('.close'),
		textArea = document.querySelector('textarea'),
		//интерактив из онлай видео 2 ур
		username = prompt('Как вас зовут?', 'Иван'),
		tel = prompt('Напишите Номер вашегно тел', '+79998884554')
		email = prompt('Напишите вашу почту', 'example@email.com');

nameInput.value = username;
phoneInput.value = tel;
let emailInput = document.querySelectorAll('.contactform_mail')[1];
emailInput.value = email;

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

		textArea.value = "Меня зовут " + nameInput.value + ", и я хочу спросить:"

		nameInput.addEventListener('input', function () {
			textArea.value = "Меня зовут " + nameInput.value + ", и я хочу спросить:"

			if (nameInput.value == "") {  //если поле имени пустое
				textArea.value = "" //то очищаем сообщение
			}
		});

		//new from stream2
		let btnSubmit = document.getElementsByTagName('button')[1],
				thanks = document.querySelector('.thanks'),
				btnClose = document.getElementsByTagName('button')[2]; //конпка в модальном окне возврата на сайт
		btnSubmit.addEventListener('click', function () {
				event.preventDefault(); //отмена действия по умолчанию. в частности,чтоб форма не пробовала отправляться. чтоб прописать св-ва которые нужны нам а не стоят по умолчанию
				if (nameInput.value.length > 0 && emailInput.value.length > 0 && phoneInput.value.length > 0) {
					modal.style.display = 'none';
					thanks.style.display = 'block';
				} else {
						alert('не все поля заполнены');
				}
		});
btnClose.addEventListener('click', function () {
		thanks.style.display = 'none';
})