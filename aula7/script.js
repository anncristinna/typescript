"use strict";
const numeros = [10, 20, 30, 40, 50];
const valores = [10, 'taxas', 20, 'produtos', 301];
function maiorQue10(data) {
    return data.filter(n => n > 10);
}
console.log(maiorQue10(numeros));
function filtrarValores(data) {
    return data.filter(item => typeof item === 'number');
}
console.log(filtrarValores(valores));
const valor = [10, 20, 30];
const nomes = ['anna', 'cris', 'joao'];
let misto = ['anna', 12, 'cris', 18];
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === "avancado") {
            color = "red";
        }
        else {
            color = "blue";
        }
        document.body.innerHTML += `
         <h2 style = "color: ${color}">${curso.nome}</h2>
         <p>Horas: ${curso.horas}</p>
         <p>Aulas: ${curso.aulas}</p>
         <p>${curso.gratuito ? "Gratuito" : "Pago"}</p>
         <p>Nível: ${curso.nivel}</p>
         <p>Tags: ${curso.tags.join(", ")}</p>
         <hr>
        `;
    });
}
fetchProduto();
