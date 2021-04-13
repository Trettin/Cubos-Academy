const nota = 8.5;

if (nota >=0 && nota <=10) {
const conceito = nota >=9 && nota <=10 ? "A" : nota>=8 && nota <9 ? "B" : nota >=6 && nota <8 ? "C" : nota>=4 && nota<6 ? "D" : "E";

console.log(`O estudando obteve conceito ${conceito}`)
} else {
    console.log("Não é uma nota válida")
}
