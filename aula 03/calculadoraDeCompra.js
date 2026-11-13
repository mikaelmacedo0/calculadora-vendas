//Calculadora de compra - Atividade prática 01

const preco = 39.90;
const quantidade = 3;
const taxaDesconto = 0.10;

//2) Cálculos
const total = preco * quantidade;
const desconto = total * taxaDesconto;
const valorFinal = total - desconto;

//resultado
console.log("Preço do produto: R$ "+preco.toFixed(2));
console.log("Quantidade: "+quantidade);
console.log("Valor total: R$ "+total.toFixed(2));
console.log("Desconto (10%): R$ "+desconto.toFixed(2));
console.log("Valor final a pagar: R$ "+valorFinal.toFixed(2));

