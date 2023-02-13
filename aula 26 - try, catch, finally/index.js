/* try {
	// executada quando nao ha erros
} catch (error) {
	// executado quando ha erros e armazena o erro
} finally {
	// sempre eh executada
} */

function retornaHora(data) {
	if (data && !(data instanceof Date)) {
		// se data n for uma instancia do objeto Date
		throw new TypeError(" nao eh uma data");
	}

	if (!data) {
		data = new Date();
	}

	return data.toLocaleString("pt-BR", {
		hour,
	});
}

console.log(retornaHora(11));
