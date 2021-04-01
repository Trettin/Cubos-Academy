const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33];

function removerDuplicados(array){
    let arrayUnico = [];
    
    array.forEach((item)=> {
       const repetido = arrayUnico.find(itemUnico => item === itemUnico )
       if(!repetido){
           arrayUnico.push(item)
       }
    });
    console.log(arrayUnico)
}

removerDuplicados(notas);
