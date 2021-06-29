function verificaPalindromo(palavra){
  let palavraInvertida = '';
  let palindromo;
  for (let i = palavra.length - 1; i >= 0; i -= 1) {
    palavraInvertida += palavra[i];
  }
if (palavraInvertida === palavra){
      palindromo = true;
    } else{
      palindromo = false;    
    }
return palindromo;
}
console.log(verificaPalindromo('arara'));