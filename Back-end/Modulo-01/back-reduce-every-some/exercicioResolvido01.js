const valores = [3, 2, 1, 10, 3.0];

console.log(valores.every(x=>x>=0 && (x%1)===0))