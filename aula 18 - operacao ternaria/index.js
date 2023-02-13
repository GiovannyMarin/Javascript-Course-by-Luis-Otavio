const Usuario = 7000;

// usuario tem pontos, se os pontos forem 1000 pra cima ele eh vip, se forem menos que isso, ele eh normal

function declararPosicao(pontos) {
	const vip = "VIP";
	const normal = "Normal";
	pontos = Usuario;
	const userposition = pontos >= 1000 ? vip : normal;
	return userposition;
}
animalFavorito = null;

favorito = animalFavorito || "cachorro";

console.log(declararPosicao(), favorito);
