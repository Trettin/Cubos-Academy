const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// Ordem Crescente:
numeros.sort((menor, maior)=> menor - maior);
console.log(numeros);

// Ordem Decrescente:
numeros.sort((menor, maior) => maior - menor);
console.log(numeros);

// Ordem crescente Unicode
numeros.sort();
console.log(numeros);

// Ordem alfabética crescente:
frutas.sort((a, b) => a.localeCompare(b));
console.log(frutas)

// frutas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(frutas)

// Ordem alfabética decrescente:
frutas.sort((a, b)=> b.toLowerCase().localeCompare(a.toLowerCase()));
console.log(frutas);

// Ordem crescente relativa a quantidade de caracteres
frutas.sort((a, b)=> a.length - b.length);
console.log(frutas)