(function () {
    'use strict';

    class UsernameGenerator extends DefaultInputField {
        //Konstruktor
        constructor(int1, int2) {
            super();
            this.int1 = int1;
            this.int2 = int2;
            this.addInput();
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
            this.usernameInput = document.getElementById("username");
            this.usernameInput.addEventListener('blur', () => {
                const newUsername = new UsernameGenerator('int1', 'int2').addInput();
                console.log(newUsername);
            });
        }
    }
    new DefaultInputField();
    /*function lettersOnly(){
        if ( this.input1.value != this.regexLetters)
            document.getElementById("errorVorname").innerHTML="Folgende Zeichen sind erlaubt um deinen Namen zu schreiben: A-Z, a-z.");*/
    /*
        var input1 = document.getElementById('name')! as HTMLInputElement;
        var input2 = document.getElementById('surname')! as HTMLInputElement;


        //only letters allowed in input field





        /* const input1 = document.getElementById(`name`);
         function typeName(name: string) {
             return name;
         }*/
    /*

        private firstDefaultForm: string = "First default form successfull";
    }

    /*public  length: number = 8;
    private charsetString: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    private charsetNumbers: number[] = [0,1,2,3,4,5,6,7,8,9];
    private retVal: any = "";

    constructor(inputClient: string){
        super();
        function typeName(){
        private name = document.getElementById('name');*/
    /*function inputChecker() {
        if userinput = charsetString {
            console.log("correct message")
        }
        else {
            alert: wrong input
        }

    }








            }



    }*/

}());
