// retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const numeros = [
	5, 80, 122, 3, 1, 23, 43, 12, 13, 23, 56, 756, 753, 34, 88, 64,
];

const pares = numeros
	.filter((valor) => valor % 2 === 0)
	.map((valor) => valor * 2)
	.reduce((acumu, valor) => {
		return acumu + valor;
	}, 0);

// pares [
//   80, 122, 12, 56,
//   756,  34, 88, 64
// ]
//
console.log(pares);
