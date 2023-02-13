function soma(x, y) {
	const resultado = x + y;
	return resultado;
}

const resultado = soma(4, 9);

if (isNaN(resultado) == true) {
	console.log("falta numeros");
} else {
	console.log(resultado);
}
