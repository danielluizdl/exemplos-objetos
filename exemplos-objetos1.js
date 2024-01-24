const pessoa = {
    nome: "Daniel",
    idade: 30,
    altura: 1.70,
    temCnh: true,
    apelidos: ["DL", "dLzin"]
}

let possuiCNH = "";
if (pessoa.temCnh) {
    possuiCNH = "possui CNH"
} else {
    possuiCNH = "nao possui CNH";

}
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${possuiCNH} e tem os seguintes apelidos:
    - ${pessoa.apelidos[0]}
    - ${pessoa.apelidos[1]}.`)