console.log('variaveis.js');
let nome = 'Bruce'; // let pode mudar.
console.log(nome);
nome = 'Peter';
console.log(nome);
const sobrenome = 'Parker'; // const não muda.
console.log(sobrenome);
console.log(nome, sobrenome);
console.log(nome + ' ' + sobrenome); // concatenação.
console.log(`${nome} ${sobrenome}`); // interpolação.

let v1 = null;
console.log(v1); // null = sem valor.
v1 = undefined;
console.log(v1); // undefined = valor indefinido.
// console.log(v2); // variável indefinida (ERRO: NÃO PODE!).

let v3 = 8;
let v4 = v3;
v3 = 5;
console.log(v3, v4); // retorna v4 = 8 e v3 = 5.
let v5 = 'teste';

// tipo (number, string, array, object).
console.log(typeof(v3)); // number
console.log(typeof(v5)); // string
