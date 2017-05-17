'use strict';

function makePermutations(input) {
  if (input.length === 1) {
    return [input];
  }

  const res = [];
  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    const rest = [].concat(input.slice(0, i)).concat(input.slice(i+1));
    const innerPermutes = makePermutations(rest);
    res.push(...innerPermutes.map(p => [item].concat(p)));
  }
  return res;
}


const arr = '1234'.split('');

console.log('Permutations for:', arr);
console.log('============================================');

const permutationsResult = makePermutations(arr);
permutationsResult.forEach((pr, i) => console.log(i + 1, pr));
