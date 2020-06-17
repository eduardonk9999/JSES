const alunosTurmaA = [
  {
    nome: "João",
    nota: 10
  },
  {
    nome: "Pedro",
    nota: 9.7
  }
]

const alunosTurmaB = [
  {
    nome: "João",
    nota: 10
  },
  {
    nome: "Paulo",
    nota: 9.5
  }
]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota) / 3;
}

const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);

function enviaMensagem(media) {
  if(media > 5) {
    console.log(`A média foi de ${media}. Parabéns`);
  } else {
    console.log('A média é menor que 5');
  }
}

enviaMensagem(media1);
enviaMensagem(media2);