const numeros = [3, 5];

const temQuadradoPerfeito = numeros.some(x => Math.sqrt(x) % 1 === 0 && Math.sqrt(x) >= 0 );

console.log(temQuadradoPerfeito)