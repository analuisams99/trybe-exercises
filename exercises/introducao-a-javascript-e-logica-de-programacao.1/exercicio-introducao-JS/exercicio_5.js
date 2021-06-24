let anguloA = 40;
let anguloB = 80;
let anguloC = 60;

let somaAngulos = anguloA + anguloB  + anguloC;
let anguloPositivo = anguloA > 0 && anguloB > 0 && anguloC > 0;
if (anguloPositivo > 0){
  if (somaAngulos === 180){
    console.log("true");
  }else if (somaAngulos !== 180){
    console.log("false");
  }
}else{
  console.log("ERRO");
};