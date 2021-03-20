// Exercícios extra 🌟
// 17. Taxa de Juros

let n = 24;
let capital = 60_000;
let montante = 90_000;

let juros = (Math.pow(montante / capital, 1/n) - 1)*100;

console.log(`O seu financiamento de ${capital} teve uma taxa de juros de ${juros}%, pois após ${n} meses você teve que pagar ${montante} reais.`);