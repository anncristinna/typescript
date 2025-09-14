"use strict";
let total = 20;
function preencherDados(dados) {
    document.body.innerHTML += `
    <h2>${dados.nome}</h2>
    </br>
    <p>R$ ${dados.preco}</p>
    </br>
    <p>${dados.teclado ? 'Possui teclado' : 'Não possui teclado'}</p>
    </br>
    `;
}
preencherDados({ nome: "computador", preco: 2281, teclado: true });
preencherDados({ nome: "tablet", preco: 1500, teclado: false });
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
function showProduct(data) {
    document.body.innerHTML += `
    <h2>${data.nome}</h2>
    <p>R$ ${data.preco}</p>
    <p>descroção: ${data.descricao}</p>
    <p>anos de garantia: ${data.garantia}</p>
    <p>${data.seguroAcidentes ? 'tem seguro acidente' : 'nao tem seguro acidente'}</p>
    <p>${data.empresaFabricante.nome}</p>
    <p>${data.empresaFabricante.fundacao}</p>
    <p>${data.empresaFabricante.pais}</p>
    `;
}
fetchProduto();
