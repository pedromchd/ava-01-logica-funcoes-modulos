console.log('eliminar.js');

export function eliminar(str, chr) {
  for (const aux of str) if (chr.indexOf(aux) !== -1) str = str.replaceAll(aux, '*');
  return str.replaceAll('*', '');
}
