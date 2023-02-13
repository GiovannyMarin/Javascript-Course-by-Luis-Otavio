const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

function zeroLeft(num) {
	return num >= 10 ? num : `0${num}`;
}

let sec = 0;
let hour = 0;
let min = 0;
let paused = true;

let time = setInterval(function Timer() {
	if (!paused) {
		relogio.innerHTML = `${zeroLeft(hour)}:${zeroLeft(min)}:${zeroLeft(sec++)}`;

		if (sec == 60) {
			sec = 0;
			min++;
		}

		if (min == 60) {
			min = 0;
			hour++;
		}
	}
}, 1000);

iniciar.addEventListener("click", function (e) {
	e.preventDefault();
	paused = false;
	relogio.classList.remove("paused");
});

pausar.addEventListener("click", function (e) {
	e.preventDefault();
	paused = true;
	relogio.classList.add("paused");
});

zerar.addEventListener("click", function (e) {
	e.preventDefault();
	sec = 0;
	hour = 0;
	min = 0;
	paused = true;
	relogio.innerHTML = `${zeroLeft(hour)}:${zeroLeft(min)}:${zeroLeft(sec++)}`;
	relogio.classList.remove("paused");
});
