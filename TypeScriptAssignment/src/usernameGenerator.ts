import {DefaultInputField} from './defaultInputField';
export class UsernameGenerator extends DefaultInputField {

    //Konstruktor
    constructor() {
        super();
    };

    //Methoden
    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    private addInput(in1: string, in2: string) {
        console.log("username generated")
        return in1 + in2 + this.getRandomInt(1,9);
    }
}


    //typisierung function output
    //var userNameGen: (int: string, int2: string, randomNumb: number) => any;


