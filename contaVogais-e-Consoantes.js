console.log('contaVogais-e-Consoantes.js');

export function contaVogais(array) {
  let aux = 'aeiou';
  let vogais = 0;
  for (let i = 0; i < array.length; i++) {
    if (aux.indexOf(array[i]) !== -1) vogais++;
  }
  return vogais;
}

export function contaConsoantes(array) {
  let aux = 'bcdfghjklmnpqrstvwxyz';
  let consoantes = 0;
  for (let i = 0; i < array.length; i++) {
    if (aux.indexOf(array[i]) !== -1) consoantes++;
  }
  return consoantes;
}
