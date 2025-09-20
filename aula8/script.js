"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto('O Morro dos Ventos Uivanes');
console.log(livro instanceof Produto);
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
        this.nome = nome;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(jogadores, nome) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Morro dos Ventos Uivantes') {
        return new Livro('O Morro dos Ventos Uivantes', 'Emily Bronte');
    }
    if (busca === 'Dark Souls') {
        return new Jogo(1, 'Dark Souls');
    }
    return null;
}
const produto = buscarProduto('O Morro dos Ventos Uivantes');
if (produto instanceof Jogo) {
    console.log(produto.jogadores);
}
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Produto) {
    console.log("sim");
    console.log(produto.nome);
}
else {
    console.log("nao");
}
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    link.href.replace('http', 'https');
}
