// Object.freeze() - trava todo o objeto para n ser alterado mais

//defineProperty() e defineProperties

//vamos tentar travar a propriedade estoque dessa funcao construtora Produtos
function Produto(nome, preco, estoque) {
	//propriedades publicas
	Object.defineProperty(this, "estoque", {
		enumerable: true, // mostra a chave quando usar o for in ou for of
		value: estoque, // valor
		writable: false, // o valor pode ser alterado?
		configurable: true,
		// a chave pode ser apagada, a chave pode ser reconfigurada?
		// configuravel
		// pode deletar a chave?
	});

	Object.defineProperties(this, {
		nome: {
			enumerable: true,
			writable: true,
			value: nome,
			configurable: true,
		},
		preco: {
			enumerable: true,
			configurable: true,
			value: preco,
			writable: true,
		},
	});
}

const p1 = new Produto("vara", 3, 4);

console.log(p1);
