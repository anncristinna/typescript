interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
}

interface Window {
    UserData: any
}

window.UserData = {}

function isUserData(value: any): value is UserData {
    if(value && ('nome' in value || "email" in value || 'cpf' in value) && typeof(value) === "object") {
        return true
    } else {
        return false
    }
}

function loadLocalStorage() {
    const localUserData = localStorage.getItem("UserData");
    if(localUserData) {
        const UserData = JSON.parse(localUserData)
        if(isUserData(UserData)) {
            
        }
    }
}

function handleKeyup({target} : KeyboardEvent) {
    if(target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}

const form = document.querySelector<HTMLFormElement>("#form");
form?.addEventListener("keyup", handleKeyup);