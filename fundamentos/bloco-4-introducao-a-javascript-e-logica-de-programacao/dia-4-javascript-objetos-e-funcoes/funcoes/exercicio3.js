function menorValor(array){
  let indice = 0;
  let numeroMenor = array[0];
  for (let i = 0; i < array.length; i += 1 ){
    if ( array[i] < numeroMenor) {
      numeroMenor = array[i];
      indice = i;
    }
  }
  return indice;
} console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));