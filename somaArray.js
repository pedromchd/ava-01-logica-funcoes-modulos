console.log('somaArray.js');

export function somaArray(array) {
  let soma = Number();
  for (const num of array) if (!isNaN(num)) soma += num;
  return soma;
}
