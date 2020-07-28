// // Utilizando o foreach na array abaixo,
// // some os valores de Taxa e os valores de Recebimento
// const transacoes = [
//     {
//         descricao: 'Taxa do Pão',
//         valor: 'R$ 39',
//     },
//     {
//         descricao: 'Taxa do Mercado',
//         valor: 'R$ 129',
//     },
//     {
//         descricao: 'Recebimento de Cliente',
//         valor: 'R$ 99',
//     },
//     {
//         descricao: 'Taxa do Banco',
//         valor: 'R$ 129',
//     },
// ]; 

// //toda vez que você coloca + na frente de uma string ele transformar sua string em um number;

// let taxaTotal = 0;
// transacoes.forEach(function(item){
//     const numeroLimpo = +item.valor.replace('R$', '');
//     if(item.descricao.slice(0, 4) === 'Taxa'){
//         taxaTotal = taxaTotal + numeroLimpo;
//     }
// });

// console.log(taxaTotal);




// // Retorne uma array com a lista abaixo
// const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
// // Substitua todos os span's por a's
// const html = `<ul>
// <li><span>Sobre</span></li>
// <li><span>Produtos</span></li>
// <li><span>Contato</span></li>
// </ul>`;
// // Retorne o último caracter da frase
// const frase = 'Melhor do ano!';
// // Retorne o total de taxas
// const transacoes = ['Taxa do Banco', '
// TAXA DO PÃO', '


let priceCart = "100"; 
let priceCartNumber = +priceCart; 

console.log(priceCart, typeof priceCart); //100 string
console.log(priceCartNumber, typeof priceCartNumber); //100 number


