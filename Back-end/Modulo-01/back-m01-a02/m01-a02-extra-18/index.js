// Exercícios extra
// 18. Área total de um cilindro.

//Portanto, para calcular a área total de um cilindro, é necessário somar a área de cada uma das suas duas bases, com a sua área lateral. A fórmula da área total é a seguinte:

let raioBase = 12;
let altura = 20;

let areaBase = 2 * Math.PI * Math.pow(raioBase, 2);
let areaLateral = 2 * Math.PI * raioBase * altura;

let areaTotal = areaBase + areaLateral;

let areaTotal1= 2 * Math.PI * raioBase * (raioBase + altura);

console.log(areaTotal);
