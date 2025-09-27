"use strict";
const menuButton = document.getElementById('btn-mobile');
function handleEvent(event) {
    const button = event.currentTarget;
    const nav = document.getElementById('nav');
    nav?.classList.toggle("active");
    if (button instanceof HTMLButtonElement) {
        if (button.getAttribute("aria-expanded") == "true") {
            button.setAttribute("aria-expanded", "false");
        }
        else {
            button.setAttribute("aria-expanded", "true");
        }
        if (button.getAttribute("aria-label") == "Abrir menu") {
            button.setAttribute("aria-label", "Fechar menu");
        }
        else {
            button.setAttribute("aria-label", "Abrir menu");
        }
    }
    console.log(button);
}
menuButton?.addEventListener('pointerdown', handleEvent);
