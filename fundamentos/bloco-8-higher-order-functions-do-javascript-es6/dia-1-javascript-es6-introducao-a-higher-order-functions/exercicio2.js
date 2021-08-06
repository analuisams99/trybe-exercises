const funcaoVerificadora = (numeroApostado, numeroSorteado) => numeroApostado === numeroSorteado; 

const sortear = (numeroApostado, funcaoVerificadora) => {
  const numeroSorteado = Math.floor(Math.random() * 5 + 1);
  return funcaoVerificadora(numeroApostado, numeroSorteado) ? `Parabéns, voce ganhou, seu numero é ${numeroApostado} e o resultado foi ${numeroSorteado}` : `Tente novamente, seu numero é ${numeroApostado} e o resultado foi ${numeroSorteado}`;
};

console.log(sortear(3, funcaoVerificadora));
