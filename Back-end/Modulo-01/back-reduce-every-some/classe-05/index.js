const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

function verificaLista (array){
    const temBebida = palavras.some(item=> item==="cerveja" || item==="vodka");
    if (temBebida) {
        console.log("Revise sua lista, joão. possui bebida com venda proibida!");
    } else {
        console.log("Tudo certo, vamos as compras!");
    }
}

verificaLista(palavras);