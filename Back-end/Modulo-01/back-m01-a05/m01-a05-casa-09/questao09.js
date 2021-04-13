
// const carrinho = {
//     nomeDoCliente: "Guido Bernal",
//     produtos: [
//         {
//             id: 1,
//             nome: "Camisa",
//             qtd: 3,
//             precoUnit: 3000
//         },
//         {
//             id: 2,
//             nome: "Bermuda",
//             qtd: 2,
//             precoUnit: 5000
//         }
//     ]
// }


// function imprimirResumoDoCarrinho(carrinho) {
//     let totalCarrinho = 0;
//     let totItens = 0;

//     for (let item of carrinho.produtos) {
//         totalCarrinho += item.precoUnit * item.qtd;
//         totItens += item.qtd;
//     }

//     console.log(`Cliente: ${carrinho.nomeDoCliente}`);
//     console.log(`Total de itens: ${totItens} itens`)
//     console.log(`Total a pagar: R$ ${(totalCarrinho/100).toFixed(2)}`)
// }

// imprimirResumoDoCarrinho(carrinho);


const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar()/100).toFixed(2)}`);
    },
    addProdutoAoCarrinho: function(produto) {
        let devoInserir = true;
        for (let item of this.produtos) {
            if (item.id === produto.id){
                item.qtd += produto.qtd;
                devoInserir = false;
            }          
        }
        if(devoInserir) {
            carrinho.produtos.push(produto);
        }
    },
    imprimirDetalhes: function(){
               
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log();

        for (let item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${((item.qtd*item.precoUnit)/100).toFixed(2)} `)
        }

        console.log();
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`)
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar()/100).toFixed(2)}`) 
    },
    calcularTotalDeItens: function(){
        let totItens = 0;
        
        for (let item of this.produtos) {
            totItens += item.qtd;
        }
        return totItens;

    },
    calcularTotalAPagar: function() {
        let totalCarrinho = 0;
        
        for (let item of this.produtos) {
            totalCarrinho += item.precoUnit * item.qtd;
        }
        return totalCarrinho;
    },
    calcularDesconto: function() {
        let descontoPreco = 0;
        if (this.calcularTotalAPagar()>10000) {
            descontoPreco = this.calcularTotalAPagar() * 0.1
        }

        let descontoPecas = this.produtos[0].precoUnit;
        if (this.calcularTotalDeItens >= 4) {
            for (let item of this.produtos){
                if (item.precoUnit < descontoPecas) {
                    descontoPecas = item.precoUnit; 
                }
            }
        }
        if (descontoPreco > descontoPecas) {
            return descontoPreco;
        } else {
            return descontoPecas;
        }

    }
}

// carrinho.imprimirResumo();
// console.log(`Desconto de R$ ${(carrinho.calcularDesconto()/100).toFixed(2)}`)

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProdutoAoCarrinho(novaBermuda);
// carrinho.imprimirResumo();
// console.log(`Desconto de R$ ${(carrinho.calcularDesconto()/100).toFixed(2)}`)


const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProdutoAoCarrinho(novoTenis);


carrinho.imprimirDetalhes();
console.log(`Desconto de R$ ${(carrinho.calcularDesconto()/100).toFixed(2)}`)

