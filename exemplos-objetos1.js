const pessoa = {
    nome: "Daniel",
    idade: 30,
    altura: 1.70,
    temCnh: true,
    apelidos: ["DL", "dLzin", "Dani"]
}

let possuiCNH = "";
if (pessoa.temCnh) {
    possuiCNH = "possui CNH"
} else {
    possuiCNH = "nao possui CNH";

}
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${possuiCNH} e tem os seguintes apelidos:`)
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}
