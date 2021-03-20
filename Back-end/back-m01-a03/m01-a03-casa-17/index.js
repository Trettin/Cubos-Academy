//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorEmReal = valorDoProduto/100;

const valorDaParcela = valorEmReal / quantidadeDoParcelamento;
const parcelasAPagar = quantidadeDoParcelamento - (valorPago /valorDaParcela);

console.log(`Restam ${parcelasAPagar} parcelas de R$${valorDaParcela}`)
