console.log('localizar.js');

export function localizar(str, chr) {
  let local = Array();
  for (const aux of str) if (chr.indexOf(aux) !== -1) {
    local.push(str.indexOf(aux));
    str = str.replace(aux, '*');
  }
  return local;
}
