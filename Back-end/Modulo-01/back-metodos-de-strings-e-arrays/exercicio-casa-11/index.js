const celular = 87644776;

function formatarCelular (celular) {

    const celularString = celular.toString();

    if (celularString.length === 11) {
        let ddd = celularString.slice(0,2).split("").join("");
        let numero = celularString.substr(2).split("");
        numero.splice(1,0," "), numero.splice(6,0,"-");
        console.log(`(${ddd}) ${numero.join("")}`)

    } else if (celularString.length === 9) {
        let numero = celularString.split("");
        numero.splice(1,0," "), numero.splice(6,0,"-");
        console.log(numero.join(""));

    } else if (celular.toString().length === 8) {
        let numero = celularString.padStart(9,"9").split("");
        numero.splice(1,0," "), numero.splice(6,0,"-");
        console.log(numero.join(""));

    } else {
        console.log("Não é um número válido")
    }
}

formatarCelular(celular);