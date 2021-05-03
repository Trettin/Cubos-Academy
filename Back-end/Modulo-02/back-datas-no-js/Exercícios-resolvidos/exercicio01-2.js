const date = new Date(2002, 5, 30, 8);
const primeiroGol = new Date(+date + 1000*60*82);
const segundoGol = new Date(+primeiroGol + 1000*60*12)
console.log(primeiroGol, segundoGol);