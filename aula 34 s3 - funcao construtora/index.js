// FUncao construtora - constroi objetos
// construtora -> sempre comeca com LETRA MAIUSCULA e usa a palavra new ex: new Pessoa

function Pessoa(nome, sobrenome) {
	// variaveis servem como elementos privados dentro da construtora
	const ID = 123;
	const MetodoInterno = function () {};
	/*se referindo a Pessoa*/
	this.nome = nome;
	this.sobrenome = sobrenome;

	this.metodo = function () {
		console.log(this.nome + "metodo");
	};
	//return n eh necessario pq ja esta retornando
}

// molde que cria objetos

const pessoa1 = new Pessoa("Marcos", "Almeida");
const pessoa2 = new Pessoa("Eduardo", "Casagrande");

pessoa1.metodo();
