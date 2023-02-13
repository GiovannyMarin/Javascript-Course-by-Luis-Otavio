// funcoes definidas com a palavra function tem um parametro definido chamado "arguments" que
//sustenta todos os argumentos enviados

/*function funcao() {
	let total = 0;
	for (let argumento of arguments) {
		total += argumento;
	}

	console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */

function conta(operador, acumulador, ...numeros) {
	// "..." eh o rest operator, utilizado para pegar o resto
	// neste caso, apos o acumulador, tudo eh numero para calcular a conta,
	//portanto todos os RESTOS digitados
	//no parametro arguments se tonaram parte do parametro numero com o rest operator
	for (let valor of numeros) {
		if (operador === "+") acumulador += valor;
		if (operador === "-") acumulador -= valor;
		if (operador === "/") acumulador /= valor;
		if (operador === "*") acumulador *= valor;
	}
	console.log(acumulador);
}

conta("+", 1, 20, 30, 40, 50);
