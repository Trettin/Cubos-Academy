const valorDaCompra = 10000;
const numeroDeParcelas = 6;
let unidade = numeroDeParcelas === 1 ? "parcela" : "parcelas";
let moeda = valorDaCompra < 2 ? "real" : "reais";
let valorDaParcela = valorDaCompra / 100 / numeroDeParcelas;

if (numeroDeParcelas === 1) {
    console.log(`Sua compra foi ${(valorDaCompra*0.9)/100} ${moeda} em ${numeroDeParcelas} ${unidade}.`);
} else {
    console.log(`Sua compra foi ${valorDaCompra/100} ${moeda} em ${numeroDeParcelas} ${unidade} de ${valorDaParcela.toFixed(2)} ${moeda}.`)
}

