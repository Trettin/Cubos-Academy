const ladoA = 3;
const ladoB = 3;

//seu código aqui

if (ladoA === ladoB && ladoA<7 && ladoB <7 && ladoA>=0 && ladoB >= 0) {
    if (ladoA ===0 ) {
        console.log("Branco")
    } else if (ladoA === 1) {
        console.log("Ás")
    } else if (ladoA === 2) {
        console.log("Duque")
    } else if (ladoA === 3) {
        console.log("Terno")
    } else if (ladoA === 4) {
        console.log("Quadra")
    } else if (ladoA === 5) {
        console.log("Quina")
    } else if (ladoA === 2) {
        console.log("Sena")
    } 
        
} else if (ladoA<7 && ladoB <7 && ladoA>=0 && ladoB >= 0) {
    console.log("NÂO")
} else if (ladoA <0 || ladoB < 0) {
    console.log("Essa pedra não existe")
}