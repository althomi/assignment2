export class MethodsPasswordCheck{
    private errorPassword: HTMLElement;
    private correctPassword: HTMLElement;
    private buttonReg: HTMLButtonElement;
    constructor() {
        this.errorPassword = document.getElementById('errorPassword')!as HTMLElement;
        this.correctPassword = document.getElementById('correctPassword')!as HTMLElement;
        this.buttonReg = document.getElementById('buttonReg')!as HTMLButtonElement;
    }

    public validatePassword (pass1: string, pass2: string) {
        if (pass1 !== pass2) {
        this.errorPassword.style.display='block';
        this.correctPassword.style.display='none';
        this.buttonReg.type='button';
        //console.log("passwordcheck: incorrect passwords")

        } else {
            this.correctPassword.style.display='block';
            this.errorPassword.style.display='none';
            this.buttonReg.type='submit';
            //console.log("passwordcheck: correct passwords")
        }
    }
}