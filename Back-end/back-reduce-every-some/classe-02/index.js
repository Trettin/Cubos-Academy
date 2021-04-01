const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const cidade = cidades.reduce((maior, atual)=> atual.length>maior.length? atual:maior);
console.log(cidade);