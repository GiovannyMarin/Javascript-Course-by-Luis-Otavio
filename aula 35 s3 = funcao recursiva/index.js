// funcoes que executam seu codigo e se chamam de volta
function recursiva(max) {
	if (max > 100) return;
	max++;

	console.log(max);

	recursiva(max); // aq ela se chama de volta
}

recursiva(0);
