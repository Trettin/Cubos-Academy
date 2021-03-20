//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

const matricula = idadeDoAluno >=18 || possuiResponsavel ? "Rematrícula realizada com sucesso" : "Não é possível fazer a rematrícula";

console.log(matricula)