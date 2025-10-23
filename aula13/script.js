"use strict";
window.UserData = {};
function isUserData(value) {
    if (value && ('nome' in value || "email" in value || 'cpf' in value) && typeof (value) === "object") {
        return true;
    }
    else {
        return false;
    }
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem("UserData");
}
function handleKeyup({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}
const form = document.querySelector("#form");
form?.addEventListener("keyup", handleKeyup);
