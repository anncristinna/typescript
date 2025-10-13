async function fecthCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}


function isCurso(value: unknown): value is Curso {
    if(value && typeof(value) == 'object' && 'nome' in value && 'horas' in value && 'tag' in value) return true;
    return false;
}

function handleCursos(data: unknown) {
    if(isCurso(data)) {

    }
}

interface Curso {
    nome: string;
    horas: number;
    gratuito: boolean;
    tags: Array<string>;
    idAulas: Array<number>;
    nivel: string
}
