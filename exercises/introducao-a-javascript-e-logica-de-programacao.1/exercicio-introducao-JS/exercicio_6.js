let peçaXadrez = "BISPO".toLowerCase()

switch(peçaXadrez){
  case "rei":
    console.log("horizontal, vertical e diagonais");
    break;
  case "rainha":
    console.log("horizontal, vertical e diagonais")
    break;
  case "bispo":
    console.log("diagonais")   
    break;
  case "cavalo":
    console.log("movimento em L, duas casas em sentido horizontal e mais uma na vertical ou vice-versa")
    break;
  case "torre":
    console.log("vertical e horizontal")
    break;
  case "peão":
    console.log("frente e diagonal")
    break;
  default:
     console.log("ERRO, NÃO É UMA PEÇA")
};

 