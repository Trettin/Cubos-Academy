// const letras = ["A", "a", "B", "C", "L", "z"];

const letras = ["A", "B", "C", "E", "z"];

let qtdLetras = 0;

for (let i=0; i< letras.length;i++) {
    if (letras[i]==="E" || letras[i]==="e") {
        qtdLetras++;
    }
}

if (qtdLetras===0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
} else if (qtdLetras>1){
    console.log(`Foram encontradas ${qtdLetras} letras "E" ou "e".`)
} else if (qtdLetras===1) {
    console.log(`Foi encontrada apenas uma letra "E" ou "e".`)
}

