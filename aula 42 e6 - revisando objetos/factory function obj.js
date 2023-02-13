// Factory functions // Constructor functions // classes

//factory function
function criaPessoa(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		get nomeCompleto() {
			//elimina a necessidade de execucao do metodo
			// metodo
			return `${this.nome} ${this.sobrenome}`;
		},
	};
}

const p1 = criaPessoa("Denis", "Andia");

console.log(p1.nomeCompleto); // n ha necessidade de () para executar, pois temos o get
