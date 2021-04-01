const texto = "Aprenda programar do zero na Cubos Academy";

function urlAmigavel(texto) {
    let txtMinusculo = texto.toLowerCase();
    let novaUrl = txtMinusculo.replace(/ /g, "-");
    console.log(novaUrl);
}

urlAmigavel(texto);