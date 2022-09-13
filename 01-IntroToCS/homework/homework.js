'use strict'

const { isMdAsciiPunct } = require("markdown-it/lib/common/utils");

function BinarioADecimal(num) {
  // tu codigo aca
let str = num.toString();
let suma = 0;
for(let i = 0; i < num.length; i++) {
suma = suma + str[i] * 2 ** (num.length - i - 1)
}
return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
var array = [];
while (num !== 0) {
  array.unshift(num % 2);
  num = Math.trunc(num / 2)
}
  return array.join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}