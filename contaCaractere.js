console.log('contaCaractere.js');

export function contaCaractere(string, character) {
  let caracteres = 0;
  for (let i = 0; i < string.length; i++) {
    if (character[0].indexOf(string[i]) !== -1) caracteres++;
  }
  return caracteres;
}
