//Exemplo
let moment = required('moment');

let brasilTetra = moment('17071994', 'DDMMYYYY');
let fromNow = brasilTetra.fromNow();

console.log('Ouvimos o "É TETRAAAA!!" há: ' + fromNow);

//easter egg
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  alert('Voilà!');
});
