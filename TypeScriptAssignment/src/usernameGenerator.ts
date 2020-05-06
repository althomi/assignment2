import {DefaultInputField} from './defaultInputField';
export class UsernameGenerator extends DefaultInputField {
    constructor() {
        super();
    };

    var username = (document.getElementById('username') as HTMLInputElement).disabled = true;



}



    //const username = document.getElementById('username') as HTMLInputElement;
    //this.username = document.getElementById('username').disabled = true;
    /*let random: number = Math.floor(Math.random() *10);
    let userNameNumber;





    function addInput(in1: string, in2: string, randomNumb: number) {
        return in1 + in2 +  randomNumb;
    }

    //weist funktion typisiert einer variablen zu
    let userNameGen: (int: string, int2: string, randomNumb: number) => any;



    //add random number to username
    function randomNumber() {
    }
}
*/
