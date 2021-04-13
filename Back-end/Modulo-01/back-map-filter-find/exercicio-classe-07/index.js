const fs = require('fs');

const content = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("./meuarquivo.txt", content, ()=> {
    console.log("Arquivo foi escrito");
})

