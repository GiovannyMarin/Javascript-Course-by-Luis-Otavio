//Declaracao de funcao (Function hoisting)
//o javascript eleva variaveis e funcoes para o topo do arquivo, n importa a ordem que foram criadas ou chamadas
falaOi();
function falaOi() {
	console.log("oi");
}

//funcoes sao First class objects ( Objeto de Primeira Classe )
//funcoes podem ser usadas como dados
//function expression

const souUmDado = function () {
	console.log("sou um dado");
};

souUmDado();

//exemplo

function executaFuncao(funcao) {}

executaFuncao(souUmDado()); // funcoes recebendo parametros como funcoes e executando

//exemplo 2 - funcao como parametro de outra funcao

setInterval(function Intervalo() {}, 1000);

//Arrow function

const mariaBenedito = () => {};

const funcaoArrow = () => {
	console.log("sou uma arrow function");
};

funcaoArrow();

// Dentro de um objeto

const obj = {
	falar: function () {
		console.log("falando");
	},
};

const obj2 = {
	falar() {
		console.log("speaking");
	},
}; // omitindo a palavra function

obj.falar();
obj2.falar();
