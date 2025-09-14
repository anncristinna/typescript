const numeros = [10, 20, 30, 40, 50];
const valores = [10, 'taxas', 20, 'produtos', 301]

function maiorQue10(data: number[]) {
    return data.filter(n => n > 10)
}

console.log(maiorQue10(numeros));

function filtrarValores(data: (string | number)[]) {
    return data.filter(item => typeof item === 'number')
}

console.log(filtrarValores(valores));

const valor: number[] = [10, 20, 30];
const nomes: Array<String> = ['anna', 'cris', 'joao']

let misto: (string | number)[] = ['anna', 12, 'cris', 18]

type Tags = Array<string>;
type AulasIds = number[];
type Nivel = "iniciante" | "avancado";


interface Curso {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: Tags;
    idAulas: AulasIds;
    nivel: Nivel;
}

async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data: Curso[] = await response.json();
    mostrarCursos(data);
}

function mostrarCursos(cursos: Curso[]) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === "avancado") {
            color = "red"
        } else {
            color = "blue"
        }
        document.body.innerHTML += `
         <h2 style = "color: ${color}">${curso.nome}</h2>
         <p>Horas: ${curso.horas}</p>
         <p>Aulas: ${curso.aulas}</p>
         <p>${curso.gratuito ? "Gratuito" : "Pago"}</p>
         <p>Nível: ${curso.nivel}</p>
         <p>Tags: ${curso.tags.join(", ")}</p>
         <hr>
        `
    })
}

fetchProduto();

interface livro {
    nome?: string;
}