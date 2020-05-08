import {PasswordCheck} from "./passwordCheck";

export class PasswordInit{
    private password1: HTMLInputElement;
    private password2: HTMLInputElement;

    constructor() {
        this.password1 = document.getElementById("password")! as HTMLInputElement;
        this.password2 = document.getElementById("passwordcheck")! as HTMLInputElement;
        new PasswordCheck(this.password1.value, this.password2.value);
    }



}