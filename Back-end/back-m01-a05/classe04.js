// Faça um programa que imprime uma mensagem amigável (que inclui chamar o cliente pelo nome) que informa o valor que ele deve pagar.

const comanda = {
    nome: "Gabriel",
    idade: 30,
    produtosConsumidos: [],
};

comanda.produtosConsumidos.push({
    nome: "tofu",
    preco: 3000,
    quantidade: 1,
}) ;

comanda.produtosConsumidos.push(
    {
        nome: "leite de coco em pó",
        preco: 2300,
        quantidade: 2,
    }
);

comanda.produtosConsumidos.push(
    {
        nome: "avelã",
        preco: 1500,
        quantidade: 1,
    }
);

let totalComanda = 0;

for (let total of comanda.produtosConsumidos) {
    totalComanda += (total.preco * total.quantidade);
}

console.log(`Olá ${comanda.nome}, o valor total da sua compra foi de R$${(totalComanda/100).toFixed(2)}`);