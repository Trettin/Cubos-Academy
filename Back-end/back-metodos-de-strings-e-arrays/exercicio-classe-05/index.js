const comentario = "Esse COVD pandemia é muito perigoso!";

function filtro(comentario) {
    let coment = comentario.toLowerCase();
    let bloqueado = coment.includes("covid")? true : coment.includes("pandemia")? true : false;
    if (bloqueado) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

filtro(comentario);