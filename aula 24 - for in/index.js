const cidades = [
	"Mesagoza",
	"Cortondo",
	"Porto Marinada",
	"Mesagoza",
	"Medali",
];

//rodar os indices do array
//for (i in cidades) {
//	console.log(cidades[i]);
//}

const nome = "Daenerys Targeryan";

//rodar os indices de uma string

//for (valor of nome) {
//	console.log(valor);
//}

//for (valor of cidades) {
//	console.log(valor);
//}

cidades.forEach(function (elemento) {
	elemento = cidades[2]; // pegar porto marinada
	console.log(elemento);
});

// For classico - geralmente com iteraveis (array ou strings)
// for in - retorna o indice ou chave (string, array ou objeto)
// for of - retorna o valor em si (interaveis, arrays ou strings)
