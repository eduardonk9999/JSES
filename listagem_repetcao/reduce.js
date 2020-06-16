//Com eles vamos percorrer a coleção e gerar alguma informação final em cima dela.

/*
 A função reduce sempre vai receber uma função callback, essa função nos vamos ter dois parametros,
 parametro um = vai ficar guardando a alteração do valor, seja essa alteração, soma, multiplicação, etc.
 o segundo parametro vai sempre guardar o valor dessa calculo da primeira.

*/

const produtos = [
  {
    nome: "notebook",
    preco: 2100
  },
  {
    nome: "smartphone",
    preco: 400
  }
]

const total = produtos.reduce((a, b) => a + b.preco, 0);

console.log(total)

