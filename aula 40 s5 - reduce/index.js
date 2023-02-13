// reduce - reduzir arrays, obj em um unico elemento

const numeros = [2, 7, 45, 4, 3, 5, 45, 9, 23, 54, 3, 12, 123];

//acumulador, valor, indice, array

// retornar pares com filter
const total = numeros.filter((valor) => {
	return valor % 2 === 0;
}, []);

//console.log(total);

// retornar o dobro com map
const dobro = numeros.map((valor) => {
	return valor * 2;
});

//console.log(dobro);

// acumular tudo num total
const tudo = numeros.reduce((acumulador, valor) => {
	acumulador += valor;
	return acumulador;
});

//console.log(tudo);

//retorne a pessoa mais velha

const pessoas = [
	{ nome: "Kaue", idade: "10" },
	{ nome: "Sirne", idade: "20" },
	{ nome: "Ilissandre", idade: "34" },
	{ nome: "Ananeias", idade: "64" },
	{ nome: "Luiz", idade: "100" },
	{ nome: "Davilo", idade: "23" },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
	if (acumulador.idade > valor.idade) return acumulador;
	// o acumulador esta pegando a primeira pessoa do array, pq n tem valor inicial
	return valor;
});
console.log(maisVelha);
