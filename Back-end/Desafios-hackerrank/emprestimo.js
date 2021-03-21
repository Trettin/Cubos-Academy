function solucao(ganhos, serasaScore, mesesParaPagar) {
  
    let juros
    
    if (serasaScore < 300) {
      juros = 0.03
    } else if (serasaScore < 700) {
      juros =  0.09 
  } else {
      juros = 0.15
  }      
    
    var parcela = ((ganhos * 3) + (ganhos * juros)) / mesesParaPagar
    
    console.log(parcela)
}