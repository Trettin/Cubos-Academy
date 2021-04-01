const numeros = [0, 122, 4, 6, 8, 7, 44];

function verificaPares (array){
    const ehPar = array.every(numero=> numero % 2 === 0);
    if (ehPar) {
        console.log("array válido");
    } else {
        console.log("array inválido");
    }
}

verificaPares(numeros);