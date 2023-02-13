const pessoa = {
	nome: "Luiz",
	sobrenome: "Miranda",
	idade: 30,
	endereco: {
		rua: "Av. Brasil",
		numero: 320,
	},
};

const {
	nome,
	idade,
	endereco,
	id = "0", // definir valor default caso n exista
	endereco: { rua, numero },
} = pessoa;
console.log(nome, idade, id, endereco, rua, numero);
