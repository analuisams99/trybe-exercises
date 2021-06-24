let custo = 1.50;
let valorDeVenda = 3.50;

if (valorDeVenda > 0){
  let impostoSobreOCusto = custo * 20/100;
  let custoTotal = custo + impostoSobreOCusto;
  let lucro = valorDeVenda - custoTotal;
  console.log("lucro: " + lucro * 1000);
}else{
  console.log("ERRO, SEM LUCRO")
}