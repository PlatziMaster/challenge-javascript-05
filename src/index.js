const prompt=require('prompt')
const pascalTriangle = require('./utils/pascalTriangle');

prompt.start();
console.log('Ingresa un número que desees saber su fibonacci: ')
prompt.get(['number'], function (err, result) {
  console.log('  Número: ' + result.number);
  console.log('  pascalTriangle: ' + pascalTriangle(result.number));
});