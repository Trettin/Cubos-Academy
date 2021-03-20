// 9. Calcular juros compostos
// Para calcular os juros compostos, utiliza-se a expressão:
// M = C (1+i)elevado a t
//Onde,
// M: montante (o capital acrescido dos juros, ou seja, Capital + Juros) C: capital (valor inicial de uma dívida, empréstimo ou investimento) i: taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100) t: período de tempo
// Exemplo:
// Se um capital de R$1000 é aplicado durante 5 meses no sistema de juros compostos sob uma taxa mensal fixa de 12,5%, qual será o valor do montante?
// Sendo:
// C = 1000 i = 0,125 t = 5

let capital = 1000;
let juros = 0.125;
let tempo = 5;

let montante = capital * (Math.pow((1 + juros),tempo));

console.log(montante)