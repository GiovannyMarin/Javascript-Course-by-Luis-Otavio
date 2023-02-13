// IIFEE -> Immediately invoked fucntion expression
// nao poluir o escopo global, criando uma funcao para armazenar dados
//criar uma funcao anonima dentro dos parenteses e chamar ela imediatamente

(function (idade) {
	// nada que estiver aqui tocara o escopo global
	//const nome = "Jeffie"; // escopo da IIFEE
	//criando uma funcao para dar o nome e sobrenome:
	function inserirNome(nome) {
		return nome;
	}
	function inserirSobrenome(sobrenome) {
		return sobrenome;
	}

	function concatenarNomes(nome, sobrenome, idade) {
		inserirNome = nome;
		inserirSobrenome = sobrenome;

		return inserirNome + " " + inserirSobrenome + " " + idade;
	}

	console.log(concatenarNomes("Talio", "Jacob", idade));
})(40); // chamo ela no ();

const nome = "Mario "; // escopo global
