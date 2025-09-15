class Produto {
    nome: string;
    preco: number;
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`
    }
}

const livro = new Produto('O Morro dos Ventos Uivanes', 120)
console.log(livro instanceof Produto);

class Livro {
    autor: string;
    constructor(autor: string) {
        this.autor = autor;
    }
}

class Jogo {
    jogadores: number;
    constructor(jogadores: number) {
        this.jogadores = jogadores;
    }
}

function buscarProduto(busca: string) {
    if(busca === 'O Morro dos Ventos Uivantes') {
        return new Livro('Emily Bronte')
    }
    if(busca === 'Dark Souls') {
        return new Jogo(1);
    }
    return null;
}

const produto = buscarProduto('O Morro dos Ventos Uivantes')

if(produto instanceof Livro) {
    console.log(produto.autor);
}