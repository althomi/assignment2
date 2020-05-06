import {DefaultInputField} from './defaultInputField';
export class UsernameGenerator extends DefaultInputField {
    constructor() {
        super();
    };

    var username = (document.getElementById('username') as HTMLInputElement).disabled = true;
    var random: number = Math.floor(Math.random() *10);


    function addInput(in1: string, in2: string, randomNumb: number) {
        return in1 + in2 +  randomNumb;
    }

    //typisierung function output
    var userNameGen: (int: string, int2: string, randomNumb: number) => any;
}

