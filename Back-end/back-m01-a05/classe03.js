// Imprima o nome do cliente
// Imprima a idade do cliente
// Modifique a idade do cliente
// Imprima a nova idade do cliente
// Imprima o nome do primeiro produto consumido
// Imprima o preço do último produto consumido

const comanda = {
    nome: "Gabriel",
    idade: 30,
    produtosConsumidos: [],
}

comanda.produtosConsumidos.push({
    nome: "tofu",
    preco: 3000,
    quantidade: 1,
}) 

comanda.produtosConsumidos.push(
    {
        nome: "leite de coco em pó",
        preco: 2300,
        quantidade: 2,
    }
)

comanda.produtosConsumidos.push(
    {
        nome: "avelã",
        preco: 1500,
        quantidade: 1,
    }
)

console.log(comanda.nome);
console.log(comanda.idade);

comanda.idade = 20;
console.log(comanda.idade);
console.log(comanda.produtosConsumidos[0].nome);
console.log(comanda.produtosConsumidos[comanda.produtosConsumidos.length -1].preco);