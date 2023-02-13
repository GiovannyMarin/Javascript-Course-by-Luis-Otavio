/*try {
	console.log(naoexiste);
} catch (err) {
	// o erro eh colocado dentro da variavel, no caso "err"
	console.log("nao existo");
}*/

function soma(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		throw `bota numero ai porra`; // cria um erro configuravel
	}

	return x + y;
}

try {
	console.log(soma("maria", 2));
} catch (error) {
	console.log(error);
}
