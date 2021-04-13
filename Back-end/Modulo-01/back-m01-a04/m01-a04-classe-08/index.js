const numeros = [54, 22, 14, 10, 284];
let existe = false;
let indice = 0;
for (let i=0; i< numeros.length;i++) {
    if (numeros[i]===10) {
        indice = i;
        existe = true;
        break;
    }
}

if (existe) {
    console.log(indice)
} else {
    console.log(-1)
}