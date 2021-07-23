import { somaArray } from './somaArray.js';

const array = [1,2,3,4];
const soma = somaArray(array);
console.log(soma); // 10
console.log(soma === 10); // true

console.log(somaArray([89, 34, 546, 12, 54, 567, 1234, 43534, 345, 654])); // 47069
console.log(somaArray([89, 34, 546, 12, 54, 567, 1234, 43534, 345, 654]) === 47069);

console.log(somaArray([]) === 0);
console.log(somaArray([5]) === 5);
console.log(somaArray([5, -10]) === -5);
