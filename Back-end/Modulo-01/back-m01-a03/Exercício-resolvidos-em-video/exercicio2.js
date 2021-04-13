const valorDaCompra = 10000;
const numeroDeParcelas = 12;
let unidade = numeroDeParcelas === 1 ? "parcela" : "parcelas";
let moeda = valorDaCompra < 2 ? "real" : "reais";
let valorDaParcela = valorDaCompra / 100 / numeroDeParcelas;

if (numeroDeParcelas === 1) {
    console.log(`Sua compra foi ${(valorDaCompra*0.9)/100} ${moeda} em ${numeroDeParcelas} ${unidade}.`);

} else if (numeroDeParcelas >=2 && numeroDeParcelas<=6 ) {

    console.log(`Sua compra foi ${valorDaCompra/100} ${moeda} em ${numeroDeParcelas} ${unidade} de ${valorDaParcela.toFixed(2)} ${moeda}.`);

} else if (numeroDeParcelas <=12) {
    const valorComJuros = valorDaCompra * Math.pow((1+0.01), numeroDeParcelas);
    const valorDaParcelaCJuros = valorComJuros /100/ numeroDeParcelas;
    console.log(`Sua compra foi ${(valorComJuros/100).toFixed(2)} ${moeda} em ${numeroDeParcelas} ${unidade} de ${valorDaParcelaCJuros.toFixed(2)} ${moeda}.`);
} else {
    console.log("Não pode dividir por essa quantidade")
}

// M = C * (1+i)elevado a n 
// i = taxa de juros
// n = tempo