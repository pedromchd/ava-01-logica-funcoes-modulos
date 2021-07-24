console.log('localizar.js');

export function localizar(str, chr) {
  let local = []
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < chr.length; j++) {
      if (str[i] === chr[j]) {
        local.push(i);
        str = str.replace(str[i],'*');
      }
    }
  }
  return local;
}
