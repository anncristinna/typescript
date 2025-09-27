"use strict";
// const button = document.querySelector('button');
// function handleClick(event: PointerEvent) {
//     console.log(event);
// }
// button?.addEventListener('pointerdown', handleClick);
// const button = document.querySelector('button');
// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//     console.log(this);
// }
// button?.addEventListener('click', handleClick);
const button = document.querySelector('button');
function handleClick(event) {
    const elemento = event.currentTarget;
    console.log(elemento);
    if (elemento instanceof HTMLButtonElement) {
        console.log(elemento.innerText);
    }
}
button?.addEventListener('click', handleClick);
