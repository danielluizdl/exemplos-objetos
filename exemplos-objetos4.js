

const produtosConsumidos = [
    {
        nomeDoProduto: "whisky",
        precounit: 30000,
        quantidade: 1

    },
    {
        nomeDoProduto: "red Bull",
        precounit: 2500,
        quantidade: 6

    },
    {
        nomeDoProduto: "Agua de Coco",
        precounit: 1000,
        quantidade: 5

    }
]

const pessoa = {
    nome: "Daniel",
    idade: 30,
    produtosConsumidos
}

let somaTotal = 0;
for (let produto of produtosConsumidos) {
    somaTotal += produto.precounit * produto.quantidade;
}

//(produtosConsumidos[0].precounit * produtosConsumidos[0].quantidade) +
//(produtosConsumidos[1].precounit * produtosConsumidos[1].quantidade) +
//(produtosConsumidos[2].precounit * produtosConsumidos[2].quantidade)

console.log(`O senhor ${pessoa.nome} deve pagar R$ ${(somaTotal / 100).toFixed(2)}`)

