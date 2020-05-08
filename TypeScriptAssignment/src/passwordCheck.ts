export class PasswordCheck{
    //private errorPassword: HTMLElement;
    constructor() {
    }

    public validatePassword (pass1: string, pass2: string) {
        if (pass1 !== pass2) {
            //this.errorPassword = (document.getElementById("errorPassword")!as HTMLElement).hidden=true;
            alert("You failed");
        } else {
            //this.errorPassword = (document.getElementById("errorPassword")! as HTMLElement).hidden=false;
            //this.errorPassword.style.display=='none';
            console.log("password correct")
        }
    }
}