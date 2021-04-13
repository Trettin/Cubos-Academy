
// let meuCarro = new Object();
//     meuCarro.ligado = false;

//     meuCarro.velocidade = 0;

//     meuCarro.ligar = function () {
//         if (meuCarro.ligado){
//             console.log("Este carro já está ligado.")
//         } else {
//             meuCarro.ligado = true;
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         }
//     }

//     meuCarro.desligar = function () {
//         if (!meuCarro.ligado) {
//             console.log("Este carro já está desligado.")
//         }  else if (meuCarro.velocidade===0) {
//             meuCarro.ligado = false;
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         } else if (meuCarro.velocidade>0) {
//             console.log("O carro só pode ser desligado quando estiver parado.")
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         }
//     }

//     meuCarro.acelerar = function (){
//         if(!meuCarro.ligado) {
//             console.log("Não é possível acelerar um carro desligado.")
//         } else {
//             meuCarro.velocidade += 10;
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         }
//     }

//     meuCarro.desacelerar =  function (){
//         if(!meuCarro.ligado) {
//             console.log("Não é possível desacelerar um carro desligado.")
//         } else {
//             meuCarro.velocidade -= 10;
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         }
//     }
    
// meuCarro.desligar(meuCarro.ligado);
// meuCarro.ligar(meuCarro.ligado);
// meuCarro.ligar(meuCarro.ligado);
// meuCarro.acelerar(meuCarro.ligado);
// meuCarro.acelerar(meuCarro.ligado);
// meuCarro.desacelerar(meuCarro.ligado);
// meuCarro.desligar(meuCarro.ligado);
// meuCarro.acelerar(meuCarro.ligado);
// meuCarro.desacelerar(meuCarro.ligado);


//SEGUNDO CÓDIGO 

// const meuCarro = {
//     ligado: false,
//     velocidade: 0,
//     ligar: function() {
//         if (meuCarro.ligado){
//             console.log("Este carro já está ligado.")
//         } else {
//             meuCarro.ligado = true;
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         }
//     },
//     desligar() {
//         if (!meuCarro.ligado) {
//             console.log("Este carro já está desligado.")
//         }  else if (meuCarro.velocidade===0) {
//             meuCarro.ligado = false;
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         } else if (meuCarro.velocidade>0) {
//             console.log("O carro só pode ser desligado quando estiver parado.")
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         }
//     },
//     acelerar(){
//         if(!meuCarro.ligado) {
//             console.log("Não é possível acelerar um carro desligado.")
//         } else {
//             meuCarro.velocidade += 10;
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         }
//     },
//     desacelerar(){
//         if(!meuCarro.ligado) {
//             console.log("Não é possível desacelerar um carro desligado.")
//         } else {
//             meuCarro.velocidade -= 10;
//             let liga = meuCarro.ligado ? "ligado": "desligado";
//             console.log(`Carro ${liga}. Velocidade: ${meuCarro.velocidade}`);
//         }
//     },
// }

// meuCarro.desligar();
// meuCarro.ligar();
// meuCarro.ligar();
// meuCarro.acelerar();
// meuCarro.acelerar();
// meuCarro.desacelerar();
// meuCarro.desligar();
// meuCarro.acelerar();
// meuCarro.desacelerar();

// TERCEIRO CÓDIGO COM LÓGICA DIFERENTE E FUNÇÕES FORA DO OBJETO. 
// TAMBÉM FOI IMPLENTADA A CONDIÇÃO EXTRA DE DESACELERAÇÃO PEDIDA NO ENUNCIADO.
// COM ISSO TODOS OS ITENS DA SESSÃO EXTRA FORAM ATENDIDOS. FALOWWWW PAPITO!!! 

function ligar(carro) {
    if (carro.ligado){
        console.log("Este carro já está ligado.")
    } else {
        carro.ligado = true;
        console.log(`Carro ligado. Velocidade: ${carro.velocidade}`);
    }
}

function desligar(carro) {
    if (!carro.ligado) {
        console.log("Este carro já está desligado.")
    }  else if (carro.velocidade===0) {
        carro.ligado = false;
        console.log(`Carro desligado. Velocidade: ${meuCarro.velocidade}`);
    } else if (carro.velocidade>0) {
        console.log("O carro só pode ser desligado quando estiver parado.")
        console.log(`Carro ligado. Velocidade: ${meuCarro.velocidade}`);
    }
}

function acelerar(carro) {
    if(!carro.ligado) {
        console.log("Não é possível acelerar um carro desligado.")
    } else {
        carro.velocidade += 10;
        console.log(`Carro ligado. Velocidade: ${meuCarro.velocidade}`);
    }
}

function desacelerar(carro) {
    if(!carro.ligado) {
        console.log("Não é possível desacelerar um carro desligado.")
    } else {
        carro.velocidade -= 10;
        if (carro.velocidade===0) {
            desligar(meuCarro);
        } else {
            console.log(`Carro ligado. Velocidade: ${meuCarro.velocidade}`);
        }
    }
}

const meuCarro = {
    ligado: false,
    velocidade: 0
}

desligar(meuCarro);
ligar(meuCarro);
ligar(meuCarro);
acelerar(meuCarro);
acelerar(meuCarro);
desacelerar(meuCarro);
desacelerar(meuCarro);
