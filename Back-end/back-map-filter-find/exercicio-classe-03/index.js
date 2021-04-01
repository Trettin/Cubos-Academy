const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

function fixer(array) {
    const arrayFixed = array.map((x) => {
        let palavra = x.toLowerCase();
        palavra = palavra[0].toUpperCase()+palavra.substr(1);
        return `${frutas.indexOf(x)} - ${palavra}`
    });
    console.log(arrayFixed);
};

fixer(frutas);