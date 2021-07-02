function maiorValor(array){
  let numeroMaior = 0;
  let atual = array[0]; 
  for (let i = 0; i < array.length; i += 1){
    if (array[i] > atual) {
      atual = array[i];
      numeroMaior = i;
    }
  }
    return numeroMaior;
} console.log(maiorValor([2, 3, 6, 7, 10, 1]));