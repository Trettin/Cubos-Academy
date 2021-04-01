const palavras = ['livro', 'canet', 'sol', 'carro', 'orel'];

function verificaCaracter (array){
    const excedeLimite = palavras.some(item=> item.length>5);
    if (excedeLimite) {
        console.log("Existe palavra inválida");
    } else {
        console.log("array validado");
    }
}

verificaCaracter(palavras);