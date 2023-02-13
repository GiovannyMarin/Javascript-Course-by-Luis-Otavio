const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto; //sera setada pelo switch case

switch (diaSemana) {
	case 0:
		diaSemanaTexto = "Domingo";
		break;
	case 1:
		diaSemanaTexto = "Segunda";
		break;
	case 2:
		diaSemanaTexto = "Terca";
		break;
	case 3:
		diaSemanaTexto = "Quarta";
		break;
	case 4:
		diaSemanaTexto = "Quinta";
		break;
	case 5:
		diaSemanaTexto = "Sexta";
		break;
	case 6:
		diaSemanaTexto = "Sabado";
		break;
}

console.log(diaSemana, diaSemanaTexto);
