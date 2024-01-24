

const pessoa = {
    nome: "jose",
    idade: 20,
    cidade: "salvador",
    profissao: "dev"
};

const endereco = {
    rua: "aqui",
    numero: "32",
    bairro: "bairro legal"
}

const objetoFundido = {
    ...pessoa,
    ...endereco
}

console.log(objetoFundido);