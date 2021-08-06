// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que recebe uma resposta correta e uma resposta do aluno retorna a pontuação desta questão. Ao final a HOF deve retornar o total da contagem de respostas certas.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculadoraDeNota = (respostaCorreta, respostaAluno) => {
  if(respostaAluno === respostaCorreta) {
    return 1;
  } 
  if(respostaAluno === 'N.A') {
    return 0;
  }
  return -0.5;
}

const notaDoAluno = (respostasCorretas, respostasAluno, funcaoCalculadoraDeNota) => {
  let nota = 0;
  for (let i = 0; i < respostasCorretas.length; i += 1) {
    nota += funcaoCalculadoraDeNota(respostasCorretas[i], respostasAluno[i]);
  }
  return nota;
}

console.log(notaDoAluno(RIGHT_ANSWERS, STUDENT_ANSWERS, calculadoraDeNota));