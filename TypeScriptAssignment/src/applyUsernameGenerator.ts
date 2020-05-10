import {MethodsUsernameGenerator} from './methodsUsernameGenerator';
export class ApplyUsernameGenerator {

    private generatedUsernameInput: HTMLInputElement;  //spezieller typ
    private firstUsername: HTMLInputElement;
    private surname: HTMLInputElement;
    constructor() {
        this.generatedUsernameInput= document.getElementById("username")! as HTMLInputElement;
        this.firstUsername= document.getElementById("name")! as HTMLInputElement;
        this.surname= document.getElementById("surname")! as HTMLInputElement;
        this.surname.addEventListener('blur', () => {
            const newUsername = new MethodsUsernameGenerator(this.firstUsername.value, this.surname.value).addInput();
            //console.log(newUsername);
            this.generatedUsernameInput.value = newUsername; //wert des inputsfeldes wird überschrieben
        })
    }


}

new ApplyUsernameGenerator();
