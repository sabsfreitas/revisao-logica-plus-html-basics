//NÃO VAMOS USAR O "VAR"
// EM VEZ DELE O "LET" OU "CONST"
var x = 'exemplo bobo'; 
// var é uma variável global
// acessível em qualquer lugar
if (true) {
    var y = 'outro exemplo bobo';
}

if (true) {
    let z  = 'variável com escopo';
    //variável local
    console.log(z); //não declara o z mas lê
}
