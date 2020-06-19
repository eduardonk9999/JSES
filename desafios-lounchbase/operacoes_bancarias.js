const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};


function createTransaction(trasacao) {
 

  user.transactions.push(trasacao);

  if(trasacao.type === 'debit') {
    var soma = 0;
    user.balance = soma - trasacao.value;
  }
  if(trasacao.type === 'credit') {
    var soma = 0;
    user.balance = soma + trasacao.value;
  }
  getHigherTransactionByType(trasacao);
}


const compras = {
  type: 'debit',
  value: 50
} 
const comprasDois = {
  type: 'credit',
  value: 100
} 

const comprasTres = {
  type: 'debit',
  value: 10
} 


createTransaction(compras);
createTransaction(comprasDois);
createTransaction(comprasTres);




function getHigherTransactionByType(typetransition) {
  console.log(typetransition)
  (valor * valor) / 2

  if()
}