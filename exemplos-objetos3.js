

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
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.idade = 31;
console.log(pessoa.idade);
console.log(pessoa.produtosConsumidos[0].nomeDoProduto)
console.log(pessoa.produtosConsumidos[produtosConsumidos.length - 1].precounit)

