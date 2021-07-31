console.log('tifanofaufoFex.js');

export function tifanoFex(array) {
  let caso1 = Array('s', 'r', 'ç', 'z', 'v');
  let caso2 = Array('ss', 'rr', 'sc', 'xc', 'ch');
  let caso3 = Array('ce', 'ci');
  array = array.toLowerCase();
  for (const aux of caso2) if (array.indexOf(aux) !== -1) array = array.replaceAll(aux, 'f*');
  array = array.replaceAll('*', '');
  for (const aux of caso3) if (array.indexOf(aux) !== -1) array = array.replaceAll(aux, `f${aux[1]}`);
  for (const aux of caso1) if (array.indexOf(aux) !== -1) array = array.replaceAll(aux, 'f');
  return array;
}
