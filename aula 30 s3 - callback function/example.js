function criaDiv(altura, largura, fundo, callback) {
	const body = document.querySelector("body");
	const div = document.createElement("div");

	div.style.height = altura;
	div.style.width = largura;
	div.style.background = fundo;

	callback(div);

	body.appendChild(div);

	return div;
}

criaDiv("300px", "400px", "black", (estaDiv) => {
	estaDiv.style.background = "red";
});
