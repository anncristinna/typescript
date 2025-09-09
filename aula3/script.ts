let produto: string = 'livro';
const preco: number = 200;

const carro: {
    marca: string;
    portas: number
} = {
    marca: 'Audi',
    portas: 4
}


const nintendo = {
    nome: 'Nintendo',
    preco: '2000'
}

function transformarPreco(produto: {nome: string; preco: string}) {
    produto.preco = `R$ ${produto.preco}`
    return produto
}

transformarPreco(nintendo);
console.log(nintendo);

function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase();
}


