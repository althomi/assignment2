(function () {
    'use strict';

    class UsernameGenerator {
        //Konstruktor
        constructor(int1, int2) {
            this.int1 = int1;
            this.int2 = int2;
        }
        ;
        //Methoden
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        addInput() {
            console.log("username generated");
            return this.int1 + this.int2 + this.getRandomInt(1, 9);
        }
    }

    class DefaultInputField {
        constructor() {
            this.generatedUsernameInput = document.getElementById("username");
            this.firstUsername = document.getElementById("name");
            this.surname = document.getElementById("surname");
            this.surname.addEventListener('blur', () => {
                const newUsername = new UsernameGenerator(this.firstUsername.value, this.surname.value).addInput();
                console.log(newUsername);
                this.generatedUsernameInput.value = newUsername; //wert des inputsfeldes wird überschrieben
            });
        }
    }
    new DefaultInputField();

    class PasswordCheck {
        //private errorPassword: HTMLElement;
        constructor() {
        }
        validatePassword(pass1, pass2) {
            if (pass1 !== pass2) {
                //this.errorPassword = (document.getElementById("errorPassword")!as HTMLElement).hidden=true;
                alert("You failed");
            }
            else {
                //this.errorPassword = (document.getElementById("errorPassword")! as HTMLElement).hidden=false;
                //this.errorPassword.style.display=='none';
                console.log("password correct");
            }
        }
    }

    class PasswordInit {
        constructor() {
            this.password1 = document.getElementById("password");
            this.password2 = document.getElementById("passwordcheck");
            this.registerButton = document.getElementById("buttonReg");
            this.password2.addEventListener('blur', () => {
                const passwortchecker = new PasswordCheck().validatePassword(this.password1.value, this.password2.value);
            });
            this.registerButton.addEventListener('click', () => {
                const passwortcheckerButton = new PasswordCheck().validatePassword(this.password1.value, this.password2.value);
            });
        }
    }
    new PasswordInit();

}());
