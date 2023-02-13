function definirMultiplicador(multiply) {
	//multiplicador
	return function (n) {
		return n * multiply;
	};
}

const duplica = definirMultiplicador(2);
const triplica = definirMultiplicador(3);
const quadriplica = definirMultiplicador(4);

console.log(duplica(3));
