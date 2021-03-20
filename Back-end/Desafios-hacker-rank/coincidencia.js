function solucao(jogadas) {
    let zero = 0
    let um = 0
 for (i=0; i<jogadas.length; i++) {
     if (jogadas[i]===0) {
         zero += 1
     } else if (jogadas[i]===1) {
         um +=1
     }
 }
    if (zero===um) {
        console.log(true)
    } else {
        console.log(false)
    }
}