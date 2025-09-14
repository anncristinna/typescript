"use strict";
let total = 200;
function isNumber(value) {
    if (typeof value == "number")
        return true;
    return false;
}
console.log(isNumber(292));
console.log(isNumber('oddsn'));
const button = document.querySelector('button');
button?.click();
function toNumber(value) {
    if (typeof value == "number")
        return value;
    else if (typeof value === "string")
        Number(value);
    throw 'value deve ser número ou string';
}
