"use strict";
let produto = 'livro';
const preco = 200;
const carro = {
    marca: 'Audi',
    portas: 4
};
const nintendo = {
    nome: 'Nintendo',
    preco: '2000'
};
function transformarPreco(produto) {
    produto.preco = `R$ ${produto.preco}`;
    return produto;
}
transformarPreco(nintendo);
console.log(nintendo);
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
