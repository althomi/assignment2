(function () {
    'use strict';

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
                //console.log("passwordcheck: incorrect passwords")
            }
            else {
                this.correctPassword.style.display = 'block';
                this.errorPassword.style.display = 'none';
                this.buttonReg.type = 'submit';
                //console.log("passwordcheck: correct passwords")
            }
        }
    }

    class ApplyPasswordCheck {
        constructor() {
            this.password1 = document.getElementById("password");
            this.password2 = document.getElementById("passwordcheck");
            this.registerButton = document.getElementById("buttonReg");
            this.registerButton.addEventListener('click', () => {
                new MethodsPasswordCheck().validatePassword(this.password1.value, this.password2.value);
            });
        }
    }
    new ApplyPasswordCheck();

}());
