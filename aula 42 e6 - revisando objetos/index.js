const pessoa = {
	nome: "Eduardo",
	sobrenome: "Almeida",
};

//voce pode chamar alguma chave do objeto de dois jeitos

//notacao de ponto
console.log(pessoa.nome);

//notacao de colchete

console.log(pessoa["sobrenome"]);

//vc pode acessar coisas dinamicamente com a notacao de colchete

const chave = "sobrenome";

console.log(pessoa[chave]);
