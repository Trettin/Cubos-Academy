function solucao(precos) {
    let newArray = []
    
    for (i=0; i<precos.length; i++){
        for (j=i+1; j<precos.length; j++){
            if ((precos[i]-precos[j])>0) {
                newArray.push(precos[i]-precos[j])    
            }
        }
        
    }
    console.log(Math.min(...newArray))
}