import {PasswordCheck} from "./passwordCheck";

export class PasswordInit{
    private password1: HTMLInputElement;
    private password2: HTMLInputElement;
    private registerButton: HTMLButtonElement;

    constructor() {
        this.password1 = document.getElementById("password")! as HTMLInputElement;
        this.password2 = document.getElementById("passwordcheck")! as HTMLInputElement;
        this.registerButton = document.getElementById("buttonReg")! as HTMLButtonElement;
        this.password2.addEventListener('blur', () => {
            const passwortchecker = new PasswordCheck().validatePassword(this.password1.value, this.password2.value);
        })
        this.registerButton.addEventListener('click', () => {
            const passwortcheckerButton = new PasswordCheck().validatePassword(this.password1.value, this.password2.value);
        })

        new PasswordCheck();
    }

}

new PasswordInit();