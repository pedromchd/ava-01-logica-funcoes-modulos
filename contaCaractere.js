console.log('contaCaractere.js');

export function contaCaractere(string, character) {
  let caracteres = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character[0]) caracteres++;
  }
  return caracteres;
}
