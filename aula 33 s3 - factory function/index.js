// Factory Function - funcao fabrica
function criaPessoa(nome, sobrenome, altura, peso) {
	return {
		// retornando objeto
		nome,
		sobrenome,
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
			// n ha necessidade de this, pois esta no escopo onde se encontra esses atributos
		},

		//Setter
		set nomeCompleto(valor) {
			valor = valor.split(" "); // trasnforma o valor que no caso eh a redeclaracao de nome completo, em array
			this.nome = valor.shift(); // shift() retira o indice 0 do array e joga dentro do parametro nome
			console.log(valor); // exibir o valor que agr sera [ 'Otavio', 'Miranda'], ja que Luiz foi para o nome
			this.sobrenome = valor.join(" "); // juntou oq sobrou do array [ 'Otavio', 'Miranda'] e juntou numa string
			console.log(valor);
		},

		fala(assunto) {
			// metodo
			return `${this.peso} esta ${assunto}`;
		}, // sempre que utilizarmos um metodo no objeto o this se referira a aquele objeto
		peso,
		altura,
		get imc() {
			// get faz o imc passar a fingir ser um atributo, mesmo sendo uma funcao
			const indice = this.peso / this.altura ** 2;
			return indice.toFixed(2);
		},
	};
}

const pessoa1 = criaPessoa("mario", "almeida", 1.9, 56);
const pessoa2 = criaPessoa("martin", "cantigo", 1.7, 34);
const pessoa3 = criaPessoa("daenerys", "devaneo", 1.1, 23);

//console.log(pessoa2.imc()); - antes do get ser colocado
console.log(pessoa1.imc); // get me permite n precisar colocar os () pois agr o imc eh fingidamente um atributo

pessoa1.nomeCompleto = "Luiz Otavio Miranda";
console.log(pessoa1.nomeCompleto);
