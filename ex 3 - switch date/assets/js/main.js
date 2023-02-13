// segunda feira, 7 de outubro de 2019, 22:52

// pegar o dia da semana e transformar em texto OK
//pegar o dia do mes e transformar em texto OK
//editar hora e minuto ${hora} ${minuto}
//inserir isso tudo no h1 class="h1data"

const h1 = document.querySelector(".h1data");
const data = new Date();

//funcao para pegar dia da semana

/*function zeroLeft(num) {
	if (num >= 10) {
		return num;
	} else {
		return `0${num}`;
	}
}*/

function zeroLeft(num) {
	return num >= 10 ? num : `0${num}`;
}

function weekToText() {
	const week = data.getDay();
	let textoWeek;
	switch (week) {
		case 0:
			textoWeek = "domingo";
			break;
		case 1:
			textoWeek = "seguunda feira";
			break;
		case 2:
			textoWeek = "terca feira";
			break;
		case 3:
			textoWeek = "quarta feira";
			break;
		case 4:
			textoWeek = "quinta feira";
			break;
		case 5:
			textoWeek = "sexta feira";
			break;
		case 6:
			textoWeek = "sabado";
			break;
	}

	return textoWeek;
}

function monthToText() {
	const month = data.getMonth();
	let textoMonth;
	switch (month) {
		case 0:
			textoMonth = "janeiro";
			break;
		case 1:
			textoMonth = "fevereiro";
			break;
		case 2:
			textoMonthk = "marco";
			break;
		case 3:
			textoMonth = "abril";
			break;
		case 4:
			textoMonth = "maio";
			break;
		case 5:
			textoMonth = "junho";
			break;
		case 6:
			textoMonth = "julho";
			break;
		case 7:
			textoMonth = "agosto";
			break;
		case 8:
			textoMonth = "setembro";
			break;
		case 9:
			textoMonth = "outubro";
			break;
		case 10:
			textoMonth = "novembro";
			break;
		case 11:
			textoMonth = "dezembro";
			break;
	}

	return textoMonth;
}

function getHour() {
	hora = zeroLeft(data.getHours());

	return hora;
}

function getMinute() {
	minute = zeroLeft(data.getMinutes());

	return minute;
}

function getDay() {
	day = zeroLeft(data.getDay());

	return day;
}

function getYear() {
	year = data.getFullYear();

	return year;
}

function adicionarH1() {
	h1.innerHTML = `${weekToText()}, ${getDay()} de ${monthToText()} de ${getYear()}, ${getHour()} : ${getMinute()}`;
}

adicionarH1();
