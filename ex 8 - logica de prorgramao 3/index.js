function FB(number) {
	if (typeof number === "number") {
		if (number > 100) {
			return "so aceitamos numeros ate 100";
		} else if (number % 3 == 0 && number % 5 == 0) {
			return "FizzBuzz";
		} else if (number % 3 == 0) {
			return "Fizz";
		} else if (number % 5 == 0) {
			return "Buzz";
		} else {
			return number;
		}
	} else {
		return number; // retonar numero
	}
}

console.log(FB(2));
