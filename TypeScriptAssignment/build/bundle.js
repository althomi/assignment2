(function () {
    'use strict';

    class MethodsUsernameGenerator {
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

    class ApplyUsernameGenerator {
        constructor() {
            this.generatedUsernameInput = document.getElementById("username");
            this.firstUsername = document.getElementById("name");
            this.surname = document.getElementById("surname");
            this.surname.addEventListener('blur', () => {
                const newUsername = new MethodsUsernameGenerator(this.firstUsername.value, this.surname.value).addInput();
                console.log(newUsername);
                this.generatedUsernameInput.value = newUsername; //wert des inputsfeldes wird überschrieben
            });
        }
    }
    new ApplyUsernameGenerator();

    class MethodsPasswordCheck {
        constructor() {
            this.errorPassword = document.getElementById('errorPassword');
            this.correctPassword = document.getElementById('correctPassword');
            this.buttonReg = document.getElementById('buttonReg');
        }
        validatePassword(pass1, pass2) {
            if (pass1 !== pass2) {
                this.errorPassword.style.display = 'block';
                this.correctPassword.style.display = 'none';
                this.buttonReg.type = 'button';
                console.log("passwordcheck: incorrect passwords");
            }
            else {
                this.correctPassword.style.display = 'block';
                this.errorPassword.style.display = 'none';
                this.buttonReg.type = 'submit';
                console.log("passwordcheck: correct passwords");
            }
        }
    }

    class ApplyPasswordCheck {
        constructor() {
            this.password1 = document.getElementById("password");
            this.password2 = document.getElementById("passwordcheck");
            this.registerButton = document.getElementById("buttonReg");
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

}());
