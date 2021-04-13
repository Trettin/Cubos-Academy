const nome = "Gabriela";
let qtsLetras = 0;
let encontrado = false;

for (let letra of nome) {
    if (letra === "a") {
        encontrado = true;
        qtsLetras++;
        
    }
}

console.log(qtsLetras)

if (!encontrado) {
    console.log("Não tem o que você queria");
}