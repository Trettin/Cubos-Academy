// Desconto do tênis
// Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo.

// O tênis custa R$ 129,99 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto, a única coisa que ele precisa é saber quanto por cento de desconto você necessita.

// Crie um programa para calcular a porcentagem necessária de desconto para você conseguir comprar o tênis, utilizando a regra de três.

// Cálculo da regra de três
// Dado 3 números, a, b e c, calculamos d utilizando a regra de três.

// a	b
// c	d
// Exemplo
// 129,99	100
// 49.99	d
let tenis = 129.99;
let dinheiro = 80;
let dinFaltando = tenis - dinheiro;

let descontoNecessario = (dinFaltando*100)/tenis;

console.log(descontoNecessario);