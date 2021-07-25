console.log('localizar.js');

export function localizar(str, chr) {
  let local = [];
  for (let i = 0; i < str.length; i++) {
    if (chr.indexOf(str[i]) !== -1) {
      local.push(i);
      str = str.replace(str[i], '*');
    }
  }
  return local;
}
