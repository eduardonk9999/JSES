//Map
const produtos = [
  {nome: '...', preco: 23.67, desconto: 0.2},
  {nome: '...', preco: 120.99, desconto: 0.3 },
  {nome: '...', preco: 3567.67, desconto: 0.5},
  {nome: '...', preco: 10.80, desconto: 0.1},
  {nome: '...', preco: 7.43, desconto: 0.05},
  {nome: '...', preco: 12355.33, desconto: 0.15},
]



function getCusto(getPrecoComDesconto) {
  return parseInt(getPrecoComDesconto * 0.3);
}

function getPrecoComDesconto(produto) {
  return produto.preco * (1 - produto.desconto);
}

function altoCusto(produto) {
  return produto.preco >= 1000;
}

 
const resultado = produtos
.filter(altoCusto)
  .map(getPrecoComDesconto)
  .map(getCusto)
console.log(resultado);

