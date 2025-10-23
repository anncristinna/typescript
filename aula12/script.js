"use strict";
function contarVogais(frase) {
    let total = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i).includes("a"))
            total++;
        if (frase.charAt(i).includes("e"))
            total++;
        if (frase.charAt(i).includes("i"))
            total++;
        if (frase.charAt(i).includes("o"))
            total++;
        if (frase.charAt(i).includes("u"))
            total++;
    }
    return total;
}
console.log(contarVogais("anna cris"));
console.log(contarVogais("a e i o u a a i i "));
