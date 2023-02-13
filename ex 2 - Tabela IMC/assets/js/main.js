const form = document.querySelector("#form"); // entrar no form
//const texto = documnt.querySelector(".texto"); // entrar nos textos
//const rotulo = document.querySelector(".rotulo"); // entrar nos rotulos

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const inputAltura = form.querySelector("#altura");
	const inputPeso = form.querySelector("#peso");

	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	if (!peso) {
		setResultado("Peso invalido", false);
		return;
	}

	if (!altura) {
		setResultado("Altura invalida", false);
		return;
	}

	const imc = getImc(peso, altura);
	const nivelImc = getNivelImc(imc);

	setResultado(`Seu Imc e ${imc} (${nivelImc}).`, true);
});

altura.addEventListener("keypress", function adiconarPonto() {
	const tamanhoaltura = altura.value.length;
	if (tamanhoaltura === 1) {
		altura.value += ".";
	}
});

function getNivelImc(imc) {
	// pegar o nivel do imc
	const nivel = [
		"Abaixo do peso",
		"Peso normal",
		"Sobrepeso",
		"Obesidade grau 1",
		"Obesidade grau 2",
		"Obesidade grau 3",
	]; // array

	if (imc >= 39.9) {
		// nao temos else, pq o return para o codigo quando eh lido
		return nivel[5];
	}
	if (imc >= 34.9) {
		return nivel[4];
	}
	if (imc >= 29.9) {
		return nivel[3];
	}
	if (imc >= 24.9) {
		return nivel[2];
	}
	if (imc >= 18.5) {
		return nivel[1];
	}
	if (imc < 18.5) {
		return nivel[0];
	}
}

function getImc(peso, altura) {
	const imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function CriaP() {
	const p = document.createElement("p");

	return p;
}

function setResultado(msg, isValid) {
	const resultado = document.querySelector(".resultados");
	resultado.innerHTML = "";
	const p = CriaP();
	p.innerHTML = msg;
	resultado.appendChild(p);

	if (isValid) {
		p.classList.add("certo");
	} else {
		p.classList.add("errado");
	}
}
