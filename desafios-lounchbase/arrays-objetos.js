// const empresa = {
//   Nome: "Rocketeseat",
//   Cor: "Roxo",
//   Foco: "Programação",
//   Endereço: {
//     Rua: "Rua Guilherme Gembala",
//     Numero: 260
//   }
// }

// console.log(`A ${empresa.Nome} está localizada em ${empresa.Endereço.Rua}, ${empresa.Endereço.Numero}`)

const programador = {
  nome: "Eduardo",
  idade: 28,
  teconologia: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.teconologia[2].nome} especialidade em ${programador.teconologia[2].especialidade}`);

