// Crie um objeto que represente o cartão de consumo de um cliente. 
// Deve ter: Nome do cliente, idade do cliente, produtos consumidos.
// Cada produto deve ter : Nome do produto, Preço unitário (em centavos), Quantidade comprada

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

console.log(comanda);