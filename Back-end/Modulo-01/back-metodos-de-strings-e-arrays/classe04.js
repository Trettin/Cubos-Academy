// Faça uma função que recebe parâmetros tipo string e imprime na tela essa string invertida, ou seja de trás p frente.
// Método reverse só pode ser chamado por arrays.

function invertida(string) {
    const array = string.split("");
    array.reverse()

    let resultadoFinal = "";

    for (let letra of array) {
        resultadoFinal += letra;
    }
    console.log(resultadoFinal);
}

invertida("eu sou muito legal");