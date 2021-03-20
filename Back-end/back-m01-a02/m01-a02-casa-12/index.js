// 12. Casos de COVID

//Po = a população incial de pessoas infectadas
//X = quantidade de pessoas paras as quais um paciente infectado pode transmitir
//t = tempo percorrido

//Ou seja, se:

let po = 1000; 
let x = 4;
let t = 100;

let pessoasInfectadas = po * Math.pow(x, (t/7));

console.log(pessoasInfectadas);