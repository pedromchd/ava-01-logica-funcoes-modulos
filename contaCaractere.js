console.log('contaCaractere.js');

export function contaCaractere(str, char) {
  let chars = Number();
  for (const aux of str) if (aux === char[0]) chars++;
  return chars;
}
