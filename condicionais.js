console.log('condicionais.js');

// if; if/else; if/else; if ... /else.
// switch/case/default.
// ?: (operador ternário).
// operadores lógicos:  &&(E) ||(OU)  (pipe).

let idade = parseInt(prompt('Idade:'));

if (idade < 10) {
    console.log('Criança.');

} else if (idade < 12) {
    console.log('Pré-adolescente.');
} else if (idade < 21) {
    console.log('Adolescente.');
} else if (idade < 60) {
    console.log('Adulto.')
} else {
    console.log('Idoso.')
}

let ano = "2019";
// NUNCA USAREMOS ==, SEMPRE ===.
// NEM !=, SEMPRE !==.
if (ano == 2019) { // == igualdade fraca.
    console.log('Estamos em 2019!');
}
if (ano === 2019) { // mesmo tipo e valor.
    console.log('2019!!!!');
}


const temp = prompt("Temperatura:");

if (temp >= 20 && temp <= 30) {
    console.log('Temperatura agradável!');
}

if (temp < 0 || temp > 40) {
    console.log("Temperatura insuportável!");
}

const tipo = 2;
switch (tipo) { // fall through
    case 1: console.log('Tipo 1.'); break;
    case 2: console.log('Tipo 2.'); break;
    case 3: console.log('Tipo 3.'); break;
    default: console.log('Inválido.');
}