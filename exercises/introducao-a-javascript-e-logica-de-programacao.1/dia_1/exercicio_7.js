let porcentagem = 36;

if (porcentagem >= 0 && porcentagem <= 100 ){
  if (porcentagem >= 90){
    console.log("NOTA A");
  }else if (porcentagem >= 80){
    console.log("NOTA B");
  }else if (porcentagem >= 70){
    console.log("NOTA C");
  }else if (porcentagem >= 60){
    console.log("NOTA D");
  }else if (porcentagem >= 50){
    console.log("NOTA E");
  }else{
    console.log("NOTA F");
  }
}else{
  console.log("ERRO, PORCENTAGEM INCORRETA")
}