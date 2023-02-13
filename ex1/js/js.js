function meuEscopo() {
	const form = document.querySelector(".form");
	const resultado = document.querySelector(".resultado");

	const pessoas = []; // array - ele vai colocar objetos

	function receberEventoForm(e) {
		e.preventDefault();
		const nome = form.querySelector(".nome");
		const sobrenome = form.querySelector(".sobrenome");
		const peso = form.querySelector(".peso");
		const altura = form.querySelector(".altura");

		pessoas.push({
			nome: nome.value,
			sobrenome: nome.value,
			peso: peso.value,
			altura: altura.value,
		});

		resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
		form.reset();
	}

	form.addEventListener("submit", receberEventoForm);
}

meuEscopo();
