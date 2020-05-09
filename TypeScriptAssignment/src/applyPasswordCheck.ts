import {MethodsPasswordCheck} from "./methodsPasswordCheck";

export class ApplyPasswordCheck{
    private password1: HTMLInputElement;
    private password2: HTMLInputElement;
    private registerButton: HTMLButtonElement;

    constructor() {
        this.password1 = document.getElementById("password")! as HTMLInputElement;
        this.password2 = document.getElementById("passwordcheck")! as HTMLInputElement;
        this.registerButton = document.getElementById("buttonReg")! as HTMLButtonElement;
        this.password2.addEventListener('blur', () => {
            const passwortchecker = new MethodsPasswordCheck().validatePassword(this.password1.value, this.password2.value);
        });
        this.registerButton.addEventListener('click', () => {
            const passwortcheckerButton = new MethodsPasswordCheck().validatePassword(this.password1.value, this.password2.value);
        });

        new MethodsPasswordCheck();
    }

}

new ApplyPasswordCheck();