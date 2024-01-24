const pessoa = {
    nome: "Daniel",
    idade: 30,
    altura: 1.70,
    temCnh: true,
    apelidos: [""]
}

let possuiCNH = pessoa.temCnh ? "possui CNH" : "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${possuiCNH} e`);

const apelidosNaoVazios = pessoa.apelidos.filter(apelido => apelido.trim() !== "");

if (apelidosNaoVazios.length > 0) {
    console.log("tem os seguintes apelidos:");
    for (let apelido of apelidosNaoVazios) {
        console.log(`- ${apelido}`);
    }
} else {
    console.log("não tem apelido.");
}
