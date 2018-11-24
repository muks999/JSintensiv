function myFirstApp(name, age) {

		alert("Привет, меня зовут " + name + " и это моя первая программа!");

		function showSkills() {
			let skills = ['HTML', 'CSS', 'WP'];
			for (let i = 0; i < skills.length; i++) {
				//document.write("Я владею " + skills[i] + "<br>");  //я владею HTML <br>
				//другой,способ вывода. лучше привыкнуть к нему! знак+ перед равно означает выводить все строки а не перезаписывать старое значение новым
				document.body.innerHTML += "Я владею " + skills[i] + "<br>";
			}
		}
		showSkills();

		function checkAge() {
				if (age > 18) {
						document.write("Отлично, все дороги открыты!)" + "<br>");
				} else{
						document.write("Сорян, немножко нужно подрасти :(" + "<br>");
				}
		}

		checkAge();

		function calcPow(num) {
				document.write(num * num);
		}
		calcPow(4);
}

myFirstApp("Max", 32);


// let answers = [],
// 		questions = [
// 			"Как ваше имя?",
// 			"Как ваше фамилия?",
// 			"Сколько вам лет?"
// 		];

// for(let i = 0; i < questions.length; i++) {
// 	answers[i] = prompt(questions[i])
// }

// document.write(answers)

// // answers[0] = prompt("Как ваше имя?", "");
// // answers[1] = prompt("Как ваше фамилия?", "");
// // answers[2] = prompt("Сколько вам лет?", "");

// // document.write(answers);