const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const cidadesSel = cidades.filter(x => x.length <= 8).join(", ");

console.log(cidadesSel)