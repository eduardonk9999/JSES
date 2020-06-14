/*
  A função reduce tem dois parametros, o primeiro é o acumulador, e o segundo
  é o elemento.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function media(acc, num) {
  const novoTotal = acc.total + num;
  const novoQtde = acc.qtde + 1;
  return {
    total: novoTotal,
    qtde: novoQtde,
    media: novoTotal / novoQtde
  }
}
const valorInicial = {total:0, qtde: 0, media: 0}
const valorFinal = numeros.reduce(media, valorInicial);

console.log(valorFinal.media);