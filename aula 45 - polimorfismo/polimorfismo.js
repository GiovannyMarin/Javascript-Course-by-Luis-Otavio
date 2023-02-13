//Superclasse

function Conta(agencia, conta, saldo) {
	this.agencia = agencia;
	this.conta = conta;
	this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
	if (valor > this.saldo) {
		console.log(`saldo insuficiente: ${this.saldo}`);
		this.verSaldo();
		return;
	}

	this.saldo -= valor;
};
Conta.prototype.depositar = function (valor) {
	this.saldo += valor;
	this.verSaldo();
};
Conta.prototype.verSaldo = function () {
	console.log(
		`Ag.: ${this.agencia} / ${this.conta} | ` +
			`Saldo.: R$${this.saldo.toFixed(2)}`
	);
};

function Corrente(agencia, conta, saldo, limite) {
	Conta.call(this, agencia, conta, saldo);
	this.limite = limite;
}
Corrente.prototype = Object.create(Conta.prototype);
Corrente.prototype.constructor = Corrente;

Corrente.prototype.sacar = function (valor) {
	if (valor > this.saldo + this.limite) {
		console.log(`saldo insuficiente: ${this.saldo}`);
		return;
	}

	this.saldo -= valor;
	this.verSaldo();
};

const conta1 = new Corrente(11, 22, 312, 100);
conta1.sacar(400);
console.log(conta1);
