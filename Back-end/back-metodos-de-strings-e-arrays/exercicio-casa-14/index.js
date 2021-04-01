const cpf = "011.022.033-44";

function removerPont(cpf) {

    let cpfOk = cpf;
    let result = "";

    while (result !== cpfOk) {
        result = cpfOk;
        cpfOk = cpfOk.replace(".", "");
        cpfOk = cpfOk.replace("-", "");
    }
    console.log(cpfOk)
}

removerPont(cpf)
