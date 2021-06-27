let array = [];
let number = 0;

for (let index = 1; index <= 25; index += 1) {
  number += 1
  array.push(number);
} 
console.log(array);

let resultadoDivisao;

for (let i = 0; i < array.length; i += 1) {
  resultadoDivisao = array[i] / 2;
  console.log(resultadoDivisao)
}