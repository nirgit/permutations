'use strict';

function permutations(arr) {
  return [arr];
}

const arr = ['a', 'b', 'c'];

console.log('Permutations for:', arr);
console.log('============================================\n');

const permutationsResult = permutations(arr);
for (let i = 0; i < permutationsResult.length; i++) {
  console.log(permutationsResult[i]);
}
