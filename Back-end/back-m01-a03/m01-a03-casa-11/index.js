//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 500000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 51;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 18000;

const rendaMensalEmReais = rendaMensalEmCentavos/100;
const totalPagoEmReais = totalJaPagoPeloAluno/100;

//código 1 

// let parcela = 0;
// if (rendaMensalEmReais >= 2000 && mesesDecorridos <=60 && totalPagoEmReais <18000) {
//     parcela = rendaMensalEmReais * 0.18;
//     console.log(`O valor da parcela desse mês é R$ ${parcela} reais.`)
// } else if (totalPagoEmReais >=18000) {
//     console.log("O aluno não deve mais nada pois já quitou o valor devido") 
// } else if (mesesDecorridos>60) {
//     console.log("O aluno não deve mais nada pois o prazo do contrato de 60 meses expirou.") 
// } else if (rendaMensalEmReais <2000) {
//     parcela = 0;
//     console.log(`O valor da parcela desse mês é R$ ${parcela} reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
// } 

// código alternativo

let quitou = totalPagoEmReais >= 18000;
let expirou = mesesDecorridos >60;
let rendaOk = rendaMensalEmReais >=2000;
let parcela = 0;

if (quitou) {
    console.log("O aluno não deve mais nada pois já quitou o valor devido");
} else if (expirou) {
    console.log("O aluno não deve mais nada pois o prazo do contrato de 60 meses expirou.");
} else if (!rendaOk) {
    console.log(`O valor da parcela desse mês é R$ ${parcela} reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
} else if (!quitou && !expirou && rendaOk) {
    parcela = rendaMensalEmReais * 0.18;
    console.log(`O valor da parcela desse mês é R$ ${parcela} reais.`);
}