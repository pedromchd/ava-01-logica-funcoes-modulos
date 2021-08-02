console.log('localizar.js');

export function localizar(str, chr) {
  let local = Array();
  for (const aux of str) if (chr.indexOf(aux) !== -1) {
    local.push(str.indexOf(aux));
    str = str.replace(aux, '*');
  }
  return local;
}

// export function localizar(str, chr) {
//   let local = Array();
//   str.split('').forEach((v, i) => { if (chr.indexOf(v) !== -1) {
//     local.push(i);
//     str = str.replace(v, '*');
//   }});
// return local;
// }
// mta chiqueza melhor ficar no atual :v
