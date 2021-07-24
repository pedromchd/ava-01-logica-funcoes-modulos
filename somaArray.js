console.log('somaArray.js');

export function somaArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) soma += array[i];
  }
  return soma;
}
