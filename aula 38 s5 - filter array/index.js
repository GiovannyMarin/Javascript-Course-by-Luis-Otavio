// retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => {
	return valor > 10;
});

//console.log(numerosFiltrados);

//checa os nomes que sao maiores ou igual de 5 letras
//retorne as pessoas que tem mais de 50 anos
//retorne as pessoas que termina com a letra 'a'
//usei o endsWith()
const pessoas = [
	{ nome: "Luiz", idade: 65 },
	{ nome: "Maria", idade: 43 },
	{ nome: "Flavio", idade: 23 },
	{ nome: "Iva", idade: 45 },
	{ nome: "Denisa", idade: 23 },
	{ nome: "Martin", idade: 67 },
];

const pessoasC5 = pessoas.filter((obj) => {
	return obj.nome.length >= 5;
});

const pessoaC50 = pessoas.filter((obj) => {
	return obj.idade >= 50;
});

const nomesTerminacomA = pessoas.filter((obj) => {
	return obj.nome.toLowerCase().endsWith("a");
	// trasnforma o nome tudo em minusculo e checa se termina com a letra a
});

console.log(nomesTerminacomA);
