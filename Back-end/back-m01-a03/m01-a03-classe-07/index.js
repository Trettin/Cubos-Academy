const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
const rendimentosEmReais = totalDeRendimentos / 100

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA")
} else if (rendimentosEmReais <= 28559.70) {
    console.log("VAZA LEÃO! JÁ TA DIFÍCIL SEM VOCÊ.")
} else {
    console.log("PEGA LEÃO")
}