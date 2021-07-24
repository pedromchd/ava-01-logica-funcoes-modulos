console.log('eliminar.js');

export function eliminar(str, chr) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < chr.length; j++) {
      if (str[i] === chr[j]) str = str.replace(str[i],'*');
    }
  }
  return str.split('*').join('');
}
