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

}());
