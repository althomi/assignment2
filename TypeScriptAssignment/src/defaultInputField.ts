import {UsernameGenerator} from './usernameGenerator';
export class DefaultInputField {

    private usernameInput: HTMLInputElement //spezieller typ
    constructor() {
        this.usernameInput= document.getElementById("username")! as HTMLInputElement;
        this.usernameInput.addEventListener('blur', () => {
            const newUsername = new UsernameGenerator('int1', 'int2').addInput();
            console.log(newUsername);
        })
    }

    //private int1 = document.getElementById("name")(! as HTMLInputElement).value

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
