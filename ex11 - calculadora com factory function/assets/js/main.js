function criaCalculadora() {
	return {
		display: document.querySelector(".display"),
		clear: document.querySelector(".btn-clear"),

		//metodo para iniciar a calculadora
		inicia() {
			this.cliqueBotoes();
		},

		//metodo para pegar o clique dos botoes
		cliqueBotoes() {
			document.addEventListener("click", function (e) {
				const el = e.target; // onde esta sendo pegado o click

				if (el.classList.contains("btn-num")) {
					calculadora.btnParaDisplay(/*digito */ el.innerText);
				}
				if (el.classList.contains("btn-clear")) {
					calculadora.btnClear(el.innerText);
				}
				if (el.classList.contains("btn-del")) {
					calculadora.btnBackspace(el.innerText);
				}

				if (el.classList.contains("btn-eq")) {
					calculadora.realizaConta();
				}
			});
		},

		realizaConta() {
			let conta = this.display.value;

			try {
				conta = eval(conta);

				if (!conta) {
					// se correr o if pega
					alert("Conta invalida");
					this.display.value = "";
					return;
				}

				this.display.value = conta;
			} catch (error) {
				// se fica o catch come
				this.display.value = "";
				alert("conta invalida");
				return;
			}
		},

		btnParaDisplay(digito) {
			this.display.value += digito;
		},

		btnClear() {
			this.display.value = "";
		},

		btnBackspace() {
			this.display.value = this.display.value.slice(0, -1);
		},
	};
}

const calculadora = criaCalculadora();
calculadora.inicia();
