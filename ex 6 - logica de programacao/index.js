// escreva uma function que receba 2 numeros e retorne o maior deles

function maiorNumero(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}

console.log(maiorNumero(10, 20));

//MELHORIA 1

function maiorNumero(num1, num2) {
	if (num1 > num2) {
		return num1;
	} // Omitimos o Else, pois RETURN fecha o bloco, ou seja,
	//caso o num1 seja maior, ele nem vai ler as proximas linhas
	return num2;
}

// MELHORIA 2

// tranformamos o codigo em funcao ternaria

function maiorNumero(num1, num2) {
	return num1 > num2 ? num1 : num2;
}

// MELHORIA 3

// transformamos a function em ARROW FUNCTION

const maiorNumero2 = (num1, num2) => {
	return num1 > num2 ? num1 : num2;
};

console.log(maiorNumero(10, 20));
console.log(maiorNumero2(10, 20));
