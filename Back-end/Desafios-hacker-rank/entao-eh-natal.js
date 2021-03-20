function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
 
    let doces = 0
    let bebidas = 0
    let salgados = 0
   
    for (i=0; i<produtos.length; i++) {
        if (produtos[i].categoria==="SALGADO") {
            salgados += (produtos[i].valor * produtos[i].quantidade) * 0.9
        } else if (produtos[i].categoria==="BEBIDA") {
          bebidas += (produtos[i].valor * produtos[i].quantidade) * 0.7
        } else if (produtos[i].categoria==="DOCE") {
          doces += (produtos[i].valor * produtos[i].quantidade) * 0.85
        }
    }
    let compra = salgados+bebidas+doces
    
    let frete = 120 * distanciaRestaurante
 
    if (ehPrimeiraCompra === true) {
      switch(cupomDesconto) {
         case "NATAL10":
           if (compra >= 3000) {
             compra = compra * 0.9
           }
         break;
         case "NATAL20":
           if (compra >= 4500) {
             compra = compra * 0.8
           }
         break;
         case "NATAL30":
           if (compra >= 6000) {
             compra = compra * 0.7
           }
         break;
         case "NATALSUPREMO":
           if (compra >= 8000) {
             compra = compra * 0.7
             frete = 0
           }
      }
    }
    compra = compra+frete
    
    console.log(compra)
 }