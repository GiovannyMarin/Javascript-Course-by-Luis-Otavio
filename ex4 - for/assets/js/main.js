const elementos = [
	{ tag: "p", texto: "Frase 1" },
	{ tag: "div", texto: "Frase 2" },
	{ tag: "footer", texto: "Frase 3" },
	{ tag: "div", texto: "Frase 4" },
	{ tag: "div", texto: "Frase 5" },
	{ tag: "div", texto: "Frase 6" },
];

const container = document.querySelector(".container");

const div = document.createElement("div");

for (i = 0; i < elementos.length; i++) {
	let par = (elementos[i] / 2) % 2 == 0 ? "Par" : "Impar";
	let { tag, texto } = elementos[i];
	let criador = document.createElement(tag);
	criador.innerHTML = `${texto} e ${par}`;

	div.appendChild(criador);
}

container.appendChild(div);
