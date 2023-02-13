//Constructor Function

function Pessoa(nome, sobrenome) {
	// construtor
	this.nome = nome;
	this.sobrenome = sobrenome;

	Object.freeze(this); // congela, e agr nenhum objeto aqui pode ser alterado
}

// 1 - a palavra new cria um objeto vazio
// 2 - e atrela a palavra this dentro dessa funcao
//constructor function sao moldes, por isso o this
//sempre sera atrelado a objetos diferentes
const p1 = new Pessoa("Luiz", "Miranda"); // objeto construido

//para travar um objeto, array, para ele n ser alterado com
Object.freeze(p1);

p1.nome = "orlindo"; // isso aq nem vai ser mostrado pq do freeze

console.log(p1);
