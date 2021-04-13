const numeros = [8, 11, 4, 1];

let maior = 0;
let menor = numeros[0];

for (let numero of numeros) {
    if (numero > maior){
        maior = numero;
    }
}

for (let numero of numeros) {
    if (numero < menor){
        menor = numero;
    }
}
console.log(maior-menor);