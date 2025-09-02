//@ts-check

const frase = 'frontend';
const total = 100.0;

console.log(frase.toUpperCase())
//total.toUpperCase();

const t = total.toFixed();
console.log(t + 10); //imprime 10010, pois toFixed retorna uma string

const empresas = ['apple', 'amazom', 'samsung'];

empresas.map(empresa => {
    empresa.toUpperCase()
})

const body = document.body;
body.style.background = 'darkblue'