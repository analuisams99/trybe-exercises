const numeroSorteado = () => Math.floor(Math.random() * 5 + 1);

const sorteio = (apostado, numeroSorteado) => {
  if (apostado === numeroSorteado) {
    return `Parabéns! Você ganhou, o numero sorteado foi ${numeroSorteado}`;
  };
  return `Tente novamente, seu numero apostado é ${apostado} e o numero sorteado foi ${numeroSorteado}`
};

console.log(sorteio(3, numeroSorteado()));
