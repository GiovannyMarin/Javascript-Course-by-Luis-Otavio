// Getter e Setter - jeito de proteger o programa

//factory function
function Produto(nome, preco, estoque) {
	//propriedades publicas
	Object.defineProperty(this, "estoque", {
		enumerable: true,
		//value: estoque,
		//writable: false,
		configurable: true,
		get: () => {
			// o trabalho do getter eh pegar o valor e mostrar ele
			return estoque;
		},
		set: (valor) => {
			// define o valor do atributo
			if (typeof valor !== "number") {
				throw new Error("n eh um numero");
			}
		},
	});
}

function criaProduto(nome) {
	return {
		get nome() {
			return nome;
		},
		set nome(valor) {
			nome = valor;
		},
	};
}

//const p1 = new Produto("vara", 3);

//p1.estoque = "asdasd";

//console.log(p1.estoque);

const p2 = criaProduto("Camiseta");

console.log(p2.nome);
