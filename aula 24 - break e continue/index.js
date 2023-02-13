const pokemons = ["Sinistea", "Larvitar", "Rogenrolla", "Deino", "Gyarados"];

for (let pokemon of pokemons) {
	if (pokemon == "Larvitar") {
		continue;
	}

	console.log(pokemon);

	if (pokemon === "Deino") {
		break;
	}
}

for (i in pokemons) {
	let pokemon = pokemons[i];
	if (pokemon == "Larvitar") {
		continue;
	}

	console.log(pokemon);

	if (pokemon === "Deino") {
		break;
	}
}
