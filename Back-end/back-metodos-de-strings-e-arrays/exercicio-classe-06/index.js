const cpf = "12345678900";
const cnpj = "12345671890110";

function isCpf(cpf) {
    if (cpf.length===11){
        let newCpf = cpf.split("");
        newCpf.splice(3,0,".") , newCpf.splice(7,0,".") , newCpf.splice(11,0,"-");
        let cpfFormatado = newCpf.join("");
        console.log(cpfFormatado);
    } else {
        console.log("CPF Inválido");
    }
}

function isCnpj(cnpj) {
    if (cnpj.length===14){
        let newCnpj = cnpj.split("");
        newCnpj.splice(2,0,"."), newCnpj.splice(6,0,"."), newCnpj.splice(10,0,"/"), newCnpj.splice(15,0,"-") ;
        let cnpjFormatado = newCnpj.join("");
        console.log(cnpjFormatado);
    } else {
        console.log("CNPJ Inválido");
    }
}

isCpf(cpf);
isCnpj(cnpj);