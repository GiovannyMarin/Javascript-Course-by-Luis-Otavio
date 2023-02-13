const pessoa1 = new Object();

pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Sobrenome";
pessoa1.falarNome = function () {
	console.log(`${this.nome} diz ola!`);
};

pessoa1.falarNome();
