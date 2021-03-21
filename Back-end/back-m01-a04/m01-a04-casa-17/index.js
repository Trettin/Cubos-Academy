const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// let auxiliar = "";

// while (filaDeDentro.length<5) {
//     auxiliar = filaDeFora[0];
//     filaDeFora.shift();
//     filaDeDentro.push(auxiliar);
// }
// console.log(filaDeDentro);
// console.log(filaDeFora);


while (filaDeDentro.length<5) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();
}

console.log(filaDeDentro);
console.log(filaDeFora);