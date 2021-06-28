let salarioBruto = 3000.00;
let salarioLiquido;
let inss;
let impostoDeRenda;

if (salarioBruto <= 1556.94){
  inss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  inss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98){
  impostoDeRenda = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
  impostoDeRenda = (salarioBase * 0.075) - 142.80; 
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
  impostoDeRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
  impostoDeRenda = (salarioBase * 0.225) - 636.13;
} else {
  impostoDeRenda = (salarioBase * 0.275) - 869.36;
}

console.log(salarioLiquido = salarioBase - impostoDeRenda);

