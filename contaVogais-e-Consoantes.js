console.log('contaVogais-e-Consoantes.js');

export function contaVogais(array) {
  let vog = 'aeiou';
  let vogais = Number();
  for (const aux of array.toLowerCase()) if (vog.indexOf(aux) !== -1) vogais++;
  return vogais;
}

export function contaConsoantes(array) {
  let con = 'bcdfghjklmnpqrstvwxyz';
  let consoantes = Number();
  for (const aux of array.toLowerCase()) if (con.indexOf(aux) !== -1) consoantes++;
  return consoantes;
}
