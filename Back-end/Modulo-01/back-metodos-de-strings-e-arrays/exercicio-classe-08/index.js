let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

identificador = identificador.padStart(6,"0");

console.log(identificador);


nome = nome.split(" ");

// uma opção pro nome

for (let i = 0; i < nome.length; i++) {
    let primeiraLetra = nome[i].slice(0, 1);
    let letraMaiuscula = primeiraLetra.toUpperCase();
    let nomeFormatado = nome[i].replace(primeiraLetra, letraMaiuscula);
    nome.splice(i, 1, nomeFormatado);
 }
 nome = nome.join(" ");

 //segunda opção
 
 // const nomeAux = [];
 
 // for (let item of nome) {
     //     let inicial = item.split("");
     //     inicial[0] = inicial[0].toUpperCase();
     //     inicial = inicial.join("");
     //     nomeAux.push(inicial);
     // }
     
     // nome = nomeAux.join(" ");
     

console.log(nome);

email = email.trim();
console.log(email);

tags = tags.join(", ");
console.log(tags);