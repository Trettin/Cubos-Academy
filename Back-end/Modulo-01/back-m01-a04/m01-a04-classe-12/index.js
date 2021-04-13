const nomes = ["Ana", "Amanda", "Joana", "Carlos"];

const nova = [];

// for (let i=0; i<nomes.length;i++){
//     let nome = (nomes[i]);
//     if (nome[0]==="A" || nome[0]==="a"){
//         nova.push(nome);
//     }
// }

// for (let i=0; i<nomes.length;i++){
//     // let nome = (nomes[i]);
//     if (nomes[i][0]==="A" || nomes[i][0]==="a"){
//         nova.push(nomes[i]);
//     }
// }

for (let nome of nomes) {
    if (nome[0]==="A" || nome[0]==="a"){
        nova.push(nome);
    }
}

if (nova[0] !== undefined){
    console.log(nova);
} else {
    console.log("Não há nomes com a letra 'a'");
}
