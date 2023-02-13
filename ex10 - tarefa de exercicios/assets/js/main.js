const tarefas = document.querySelector(".tarefas");
const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");

function criaLi() {
	const li = document.createElement("li");
	return li; // este LI
}

inputTarefa.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		if (!inputTarefa.value) return;
		criaTarefa(inputTarefa.value);
	}
});

function limpaInput() {
	inputTarefa.value = "";
	inputTarefa.focus();
}

function criaBotaoApagar(li) {
	li.innerText += " ";
	const BotaoApagar = document.createElement("button");
	BotaoApagar.innerText = "X";
	BotaoApagar.setAttribute("class", "apagar"); // setou uma classe no botao
	li.appendChild(BotaoApagar);
}

function criaTarefa(textoInput) {
	const li = criaLi(); // esta aq
	li.innerHTML = textoInput;
	tarefas.appendChild(li);
	limpaInput();
	criaBotaoApagar(li); // e recebe o botao nessa funcao
	salvarTarefa();
}

btnTarefa.addEventListener("click", function () {
	if (!inputTarefa.value) return;
	criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
	const el = e.target;
	if (el.classList.contains("apagar")) {
		el.parentElement.remove(); // remover o elemento pai doq esta sendo clicado
		salvarTarefa();
	}
});

function salvarTarefa() {
	const liTarefas = tarefas.querySelectorAll("li");
	const listaDeTarefas = [];

	for (let tarefa of liTarefas) {
		let tarefaTexto = tarefa.innerText;
		tarefaTexto = tarefaTexto.replace("X", "").trim();
		listaDeTarefas.push(tarefaTexto);
	}

	const tarefasJSON = JSON.stringify(listaDeTarefas);
	localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
	const tarefas = localStorage.getItem("tarefas");
	const listaDeTarefas = JSON.parse(tarefas);

	for (let tarefa of listaDeTarefas) {
		criaTarefa(tarefa);
	}
}
adicionaTarefasSalvas();
