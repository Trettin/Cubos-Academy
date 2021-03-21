function solucao(palpite, palavra) {
   
    var letter_Count = 0
    for (var i = 0; i < palavra.length; i++) {
    if (palavra.charAt(i) === palpite) {
      letter_Count += 1
      }
  }
  console.log(letter_Count)
}