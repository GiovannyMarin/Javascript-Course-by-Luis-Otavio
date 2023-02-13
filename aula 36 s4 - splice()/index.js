//               -5        -4        -3        -2        -1
//                0         1         2         3         4
const nomes = ["Maria", "Eduardo", "Mario", "Gabriel", "Julia"];

//nomes.splice(indice para comecar, deletar quantos elementos, elemetos para adicionar)

// pop e shiftcom splice
//nomes.splice(4, 1); // remover comecando do indice 4, 1 elemento
//nomes.splice(0, 2); // remover comecando do indice 0, 2 elementos
nomes.splice(-3, Number.MAX_VALUE); // remover comecando do indice negativo -3 ate o numero maximo

console.log(nomes);

//               -5        -4        -3        -2        -1
//                0         1         2         3         4
const nomes2 = ["Maria", "Eduardo", "Mario", "Gabriel", "Julia"];

//unshift e push com splice
// n remove nada, mas adiciona no indice 3 'Hernando'
nomes2.splice(3, 0, "Hernando");

console.log(nomes2);

// remove do indice 2, 1 elemento e nele, adiciona 'Denis'
nomes2.splice(2, 1, "Denis");

console.log(nomes2);
