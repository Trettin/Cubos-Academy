const nomeArquivo = 'Foto da Famili.jpeg';

function verificaArquivo(nomeArquivoParam){

    if (verificaNome(nomeArquivoParam)===".jpeg" || verificaNome(nomeArquivoParam)===".jpg" || verificaNome(nomeArquivoParam)===".gif" || verificaNome(nomeArquivoParam)===".png") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido")
    }
}

function  verificaNome(nomeArquivoParam) {
    return nomeArquivoParam.substr(nomeArquivoParam.lastIndexOf("."))
}


verificaArquivo(nomeArquivo)