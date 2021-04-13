const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

let contagem = 5;
let indice = 0;

function imprimirJogadores(array){
    if(contagem!==0){
        console.log(jogadores[indice]);
        contagem--;
        indice++;
    } else {
        
        console.log("A rodada terminou");
        clearInterval(intervalId);
    }
}

imprimirJogadores(jogadores);
const intervalId = setInterval(imprimirJogadores, 2000);
