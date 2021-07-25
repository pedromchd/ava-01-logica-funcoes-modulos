console.log('tifanofaufoFex.js');

export function tifanoFex(array) {
  array = array.toLowerCase();
  let caso1 = ['s', 'r', 'ç', 'z'];
  let caso2 = ['ss', 'rr', 'sc', 'xc', 'ch'];
  let caso3 = ['ce', 'ci'];
  for (let i = 0; i < caso2.length; i++) {
    if (array.indexOf(caso2[i]) !== -1) array = array.replaceAll(caso2[i], 'f*')
  }
  array = array.replaceAll('*', '');
  for (let i = 0; i < caso3.length; i++) {
    if (array.indexOf(caso3[i]) !== -1) array = array.replaceAll(caso3[i], `f${caso3[i][1]}`);
  }
  for (let i = 0; i < caso1.length; i++) {
    if (array.indexOf(caso1[i]) !== -1) array = array.replaceAll(caso1[i], 'f');
  }
  return array;
}
