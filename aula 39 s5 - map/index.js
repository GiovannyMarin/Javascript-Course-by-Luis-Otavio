//Dobre os numeros
const numeros = [5, 50, 60, 1, 2, 23, 53, 213, 4, 3, 12];

const numerosDobrados = numeros.map((valor) => {
	return valor * 2;
});

//console.log(numerosDobrados);

//para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave nome do objeto
//adicione uma chave id em cada objeto

const pessoas = [
	{ nome: "Jhona", idade: 60 },
	{ nome: "Deni", idade: 23 },
	{ nome: "Lavinia", idade: 65 },
	{ nome: "Sayonara", idade: 43 },
	{ nome: "Eduardo", idade: 13 },
	{ nome: "Luther", idade: 76 },
	{ nome: "Martin", idade: 14 },
];

const retornaNome = pessoas.map((obj) => {
	return obj.nome;
});

//console.log(retornaNome);

const removeChaveNome = pessoas.map((obj) => {
	delete obj.nome;
	return obj;
});

//console.log(removeChaveNome);

const adicionarID = pessoas.map((obj, indice) => {
	obj.id = indice;
	return obj;
});

console.log(pessoas); // map mexe no array original
