//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 4;

//Primeiro código

// const risco = quantidadeDeAguaIngerida < 1.5 && quantidadeDeAguaIngerida>=0 ? "ALTO" : quantidadeDeAguaIngerida <=3 && quantidadeDeAguaIngerida>=1.5 ? "MODERADO" : quantidadeDeAguaIngerida>3 ? "BAIXO" : "Não é um número válido";

// if (risco === "ALTO") {
//     console.log(`Risco Alto - Você está ingerindo pouquissima água, beba mais água!`)
// } else if (risco === "MODERADO") {
//     console.log(`Risco Moderado - Você está ingerindo pouca água, beba mais!`)
// } else if (risco === "BAIXO") {
//     console.log(`Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!`)
// } else {
//     console.log("Digite um número positivo")
// }

//Código alternativo
if (quantidadeDeAguaIngerida<1.5 && quantidadeDeAguaIngerida>=0) {
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!")
} else if (quantidadeDeAguaIngerida<=3 && quantidadeDeAguaIngerida>=1.5) {
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!")
} else if (quantidadeDeAguaIngerida>3) {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!")
} else {
    console.log("Não é uma quantidade válida.")
}