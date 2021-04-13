const ladoA = 0;
const ladoB = 0;

//seu código aqui

if (ladoA === ladoB && ladoA<7 && ladoB <7 && ladoA>=0 && ladoB >= 0) {
    console.log("SIM")
} else if (ladoA<7 && ladoB <7 && ladoA>=0 && ladoB >= 0) {
    console.log("NÂO")
} else if (ladoA <0 || ladoB < 0) {
    console.log("Essa pedra não existe")
}