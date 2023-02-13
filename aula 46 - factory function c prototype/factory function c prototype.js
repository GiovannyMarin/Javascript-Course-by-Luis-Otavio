const falar = {
	falar() {
		console.log(`${this.nome} is speaking`);
	},
};

const comer = {
	comer() {
		console.log(`${this.nome} is eating`);
	},
};

const beber = {
	beber() {
		console.log(`${this.nome} is drinking`);
	},
};
const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
	return Object.create(pessoaPrototype, {
		nome: { value: nome },
		sobrenome: { value: sobrenome },
	});
}

const p1 = criaPessoa("Luiz", "Otavio");

console.log(p1);
