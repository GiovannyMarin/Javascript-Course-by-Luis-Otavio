// lado esquerdo eh a desestruturacao e o lado direito eh o array

//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//operador com duas funcoes
//... rest ( pegar o resto)
//... spread ( espalhar)

//... como funcao de rest

//const [prima, seguna, tercena, quartena, ...resto] = numeros;

//function soma(con) {
//	con = tercena + quartena;
//	const num = prima + seguna;
//	return num + con;
//}

//console.log(soma(), resto);

const nume = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(nume[1][1]);
