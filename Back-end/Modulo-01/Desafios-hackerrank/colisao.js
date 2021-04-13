function solucao(velocidade, aceleracao, distanciaObjeto) {
    distancia = -(velocidade * velocidade) / (aceleracao * 2)
      if (distanciaObjeto < distancia) {
          console.log("COLISAO A FRENTE")
      } else if (distanciaObjeto === distancia) {
          console.log("NAO ACELERE")
      } else if (distanciaObjeto > distancia) {
          console.log("CAMINHO SEGURO")
      }
  }