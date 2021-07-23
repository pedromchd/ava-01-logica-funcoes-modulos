# Avaliação 01 Lógica, Funções e Módulos

Link do GitHub Classroom <https://classroom.github.com/a/FWfNRCXE>

## Implementar usando módulos e funções e testar segundo as especificações

Esta atividade é avaliada e o esforço é estimado entre 3 e 6 horas.

Copie os casos de teste para o [index.js](index.js), conforme o exemplo que já está no arquivo. Comente as linhas com `//` ou `/*` e `*/` e as descomente conforme for implementando.

Se houver um caso de teste incorreto, avise o professor e faça o ajuste. Mas, **IMPORTANTE**, a especificação não pode ser alterada, isto é, não altere os nomes das classes, métodos ou mude a quantidade de parâmetros e tipo de retorno, a não ser que a atividade deixe livre para esta escolha.

**As funções devem ser implementadas em arquivos separados (módulos) e não em index.js**.

### Somar array

Implementar a soma dos valores presentes em um array.

**Casos de Teste:**

```javascript
const array = [1,2,3,4];
const soma = somaArray(array);
console.log(soma); // 10
console.log(soma === 10); // true

console.log(somaArray([89, 34, 546, 12, 54, 567, 1234, 43534, 345, 654])); // 47069
console.log(somaArray([89, 34, 546, 12, 54, 567, 1234, 43534, 345, 654]) === 47069); // true

console.log(somaArray([]) === 0);        // true
console.log(somaArray([5]) === 5);       // true
console.log(somaArray([5, -10]) === -5); // true
```


### Contar vogais e consoantes de uma String (0.1 pts)

Dada uma String contar a quantidade de vogais e consoantes. Os caracteres acentuados (á, é, ã, etc) e/ou especiais (ç, ñ, etc) não devem ser computados.

Considere uma _string_ e um caractere. Retorne a quantidade de ocorrências deste caractere na _string_.

**Casos de Teste:**

```javascript
let s = "ifrs";
const vogais = contaVogais(s);
const consoantes = contaConsoantes(s);

console.log(vogais);           // imprime 1
console.log(vogais === 1);     // imprime true
console.log(consoantes);       // imprime 3
console.log(consoantes === 3); // imprime true

s = 'instituto federal';
console.log(contaVogais(s)     === 7);
console.log(contaConsoantes(s) === 9);

console.log(contaVogais('informática')     === 4);
console.log(contaConsoantes('informática') === 6);

console.log(contaVogais('computação')     === 4);
console.log(contaConsoantes('computação') === 4);
```


### Contar um caractere em uma String

Considere uma _string_ e um caractere. Retorne a quantidade de ocorrências deste caractere na _string_.

**Casos de Teste:**

```javascript
const umaString   = 'uma string de teste';
const umCaractere = 's';

// há dois `s` em `uma string de teste`
console.log(contaCaractere(umaString, umCaractere)); // 2
console.log(contaCaractere(umaString, umCaractere) === 2); // true
// sempre true:
console.log(contaCaractere(umaString, 'e') === 3);
console.log(contaCaractere(umaString, 'o') === 0);

console.log(contaCaractere('', ' ')  === 0);
console.log(contaCaractere(' ', ' ') === 1);

console.log(contaCaractere('ABC', 'b') === 0);
console.log(contaCaractere('ABC', 'B') === 1);
console.log(contaCaractere('POO', 'O') === 2);
```



### Eliminar caracteres de uma String

Considere duas _Strings_, a primeira contendo o texto e a segunda contendo a lista de caracteres a excluir. Retorne o texto sem estes caracteres.

**Casos de Teste:**

```javascript
let str1 = 'aula';
let str2 = eliminar(str1, 'a'); // eliminar 'a' de 'aula'
console.log(str1 === 'aula');
console.log(str2 === 'ul'); // 'aula' se torna 'ul'

let str3 = eliminar(str1, str2); // eliminar 'ul' de 'aula'
console.log(str3 === 'aa'); // 'aula' sem 'ul' se torna 'aa'

// Eliminar os caracteres independente da ordem:
console.log(eliminar('texto de teste', 'tx') === 'eo de ese');
console.log(eliminar('palavra', 'rlv') === 'paaa');
console.log(eliminar('exemplo', 'ertyui') === 'xmplo');

console.log(eliminar('exemplo', '') === 'exemplo');
console.log(eliminar('TESTE', 'e') === 'TESTE');
console.log(eliminar('teste', 'eeeeee') === 'tst');
console.log(eliminar('POO', 'OP') === '');
console.log(eliminar('', 'abc') === '');
console.log(eliminar('', '') === '');
console.log(eliminar('aabbbbbccccc', 'cc') === 'aabbbbb');
console.log(eliminar('aabbbbbccccc', 'abbc') === '');
```



### Localizar os índices de um caractere em uma String

Considere uma _string_ e um caractere a localizar. Devolver um _array_ com todos os índices encontrados para este caractere em ordem crescente.

```javascript
const letraA = 'a'; // a letra `a` está nos índices marcados abaixo
//                    _ _ _        _ _ _
const umTexto = `programacao orientada a objetos`;
//               0123456789012345678901234567890
let indices = localizar(umTexto, letraA);

// a letra `a` aparece nos índices 5, 7, 9, 18, 20 e 22
console.log(indices); // [5, 7, 9, 18, 20, 22]

console.log(indices.length === 6); // true

console.log(indices[0] === 5);  // true
console.log(indices[1] === 7);  // true
console.log(indices[2] === 9);  // true
console.log(indices[3] === 18); // true
console.log(indices[4] === 20); // true
console.log(indices[5] === 22); // true

indices = localizar(`woo`, 'o');
console.log(indices.length === 2); // true
console.log(indices[0]     === 1); // true
console.log(indices[1]     === 2); // true

indices = localizar(`woo`, letraA);
console.log(indices.length === 0); // true

indices = localizar(`woo`, 'W');
console.log(indices.length === 0); // true

console.log(localizar(`array`, 'y')[0] === 4); // true
```



### Implementar o TIFANOFAUFO FEX de um texto

Se não conheces o _Tifanofaufo Fex_ confira nesse link: <https://www.google.com.br/search?q=tifanofaufo+fex&tbm=isch>

O objetivo é criar um método que receba uma String e devolva ela no dialeto do Tifanofaufo. Neste problema os a especificação dos nomes de variáveis e métodos e a definição dos casos de teste é por sua conta. Considere escrever pelo menos uns 5 casos de teste.

* * *

Deu certo [:)](memes/yes.jpg) Deu errado [:(](memes/no.jpg)
