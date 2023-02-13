//const treHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000; // um dia em milessimos, 60 * 60 = 1 hora * 24 = 24 horas * 1000 = milesimos de segundo
//const data = new Date(0 + treHoras + umDia);

//const data = new Date("2011-11-28 10:32:17");
//console.log(data.toString());

//for (contador = 0; contador < 10; contador--) {
//	const data = new Date();
//	console.log(data.toString());
//}

const data = new Date();
console.log("Dia", data.getDate());
console.log("Mes", data.getMonth());
console.log("Ano", data.getFullYear());
console.log("Horas", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Milisegundos", data.getMilliseconds());
console.log("Dia da semana", data.getDay());
console.log(data.toString());
