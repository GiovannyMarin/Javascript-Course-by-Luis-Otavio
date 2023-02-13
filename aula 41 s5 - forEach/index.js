// iterar em arrays

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach (valor, indice, array) -> voce n precisa necessariamente usar as 3

a1.forEach((valor) => {
	console.log(valor);
});

a1.forEach((valor, indice) => {
	console.log(valor, indice);
});

a1.forEach((valor, indice, array) => {
	console.log(valor, indice, array);
});
