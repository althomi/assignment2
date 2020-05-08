import {UsernameGenerator} from './usernameGenerator';
export class DefaultInputField {

    private generatedUsernameInput: HTMLInputElement;  //spezieller typ
    private firstUsername: HTMLInputElement;
    private surname: HTMLInputElement;
    constructor() {
        this.generatedUsernameInput= document.getElementById("username")! as HTMLInputElement;
        this.firstUsername= document.getElementById("name")! as HTMLInputElement;
        this.surname= document.getElementById("surname")! as HTMLInputElement;
        this.surname.addEventListener('blur', () => {
            const newUsername = new UsernameGenerator(this.firstUsername.value, this.surname.value).addInput();
            console.log(newUsername);
            this.generatedUsernameInput.value = newUsername; //wert des inputsfeldes wird überschrieben
        })
    }


}

new DefaultInputField();
