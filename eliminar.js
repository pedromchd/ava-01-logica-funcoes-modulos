console.log('eliminar.js');

export function eliminar(str, chr) {
  for (let i = 0; i < str.length; i++) {
    if (chr.indexOf(str[i]) !== -1) str = str.replaceAll(str[i], '*');
  }
  return str.replaceAll('*', '');
}
