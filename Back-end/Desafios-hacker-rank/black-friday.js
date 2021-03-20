function solucao(produtos, valorMaximo, avaliacaoMinima) {
    var presentes = []
    for(let i = 0; i < produtos.length; i++) { 
        if (produtos[i].valor <= valorMaximo && produtos[i].avaliacao >= avaliacaoMinima) {           
           presentes.push(produtos[i])  
        }  
    } 
    console.log(presentes)
}