// Faça uma função chamada imprimirData que tem 3 parâmetros : dia, mês e ano.
// A data deve conter 8 dígitos.

function imprimirData(dia, mes, ano) {
    const data = `${dia}`.padStart(2, "0") +"/"+ `${mes}`.padStart(2,"0")+ "/"+`${ano}` ;
    console.log(data)
}

imprimirData(7, 9, 1990);