console.log('lacos.js');

// for, while, do while, foreach.

let txt = 'info';
const tam = 10;
const char = '#';

// para (for)

// const qtd = tam - txt.length;

// for(let i = 0; i < qtd; i++) {
    // txt += char;
// }
// console.log(txt); // info######


while (txt.length < 10) {
    txt += char;
}
console.log(txt); // info######

const nomes = []; //vetor/array.
console.log(nomes.length); //0.
nomes.push('Bernardo');
nomes.push('Marina');
console.log(nomes);
console.table(nomes);
console.log(nomes[0], nomes[1]);

//nomes[2] não!
// último:
console.log(nomes[nomes.length-1]);
nomes.push('Jean Luca');
console.log(nomes[nomes.length-1]);

for (let i = 0; i < nomes.length; i++) {
    console.log('Nome', i, nomes[i]);
    console.log(`Nome ${i + 1} ${nomes[i]}`)
}

// for each (para cada); não tem índice.
for (const nome of nomes) {
   console.log('Nome ', nome);
}