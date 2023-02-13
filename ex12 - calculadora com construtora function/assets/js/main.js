function Calculadora() {
	this.display = document.querySelector(".display");
	this.iniciar = () => {
		this.cliqueBotoes();
	};

	this.cliqueBotoes = function () {
		addEventListener("click", (e) => {
			const el = e.target;

			if (el.classList.contains("btn-num")) {
				this.btnParaDisplay(el);
			}
			if (el.classList.contains("btn-clear")) {
				this.clearDisplay();
			}
			if (el.classList.contains("btn-del")) {
				this.backspace();
			}
			if (el.classList.contains("btn-eq")) {
				this.realizarConta();
			}
		});
	};

	this.btnParaDisplay = (el) => {
		this.display.value += el.innerText;
	};

	this.clearDisplay = () => {
		this.display.value = "";
	};

	this.backspace = () => {
		this.display.value = this.display.value.slice(0, -1);
	};

	this.realizarConta = () => {
		try {
			const conta = eval(this.display.value);

			if (!conta) {
				alert("conta invalida");
				return;
			}

			this.display.value = conta;
		} catch (e) {
			alert("conta invalida");
			return;
		}
	};
}

const calculadora = new Calculadora();
calculadora.iniciar();
