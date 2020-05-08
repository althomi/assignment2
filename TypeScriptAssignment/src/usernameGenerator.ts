import {DefaultInputField} from './defaultInputField';
export class UsernameGenerator extends DefaultInputField {

    //Konstruktor
    constructor(private int1: string, private int2: string) {
        super();
        this.addInput();

    };

    //Methoden
    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public addInput() {
        console.log("username generated")
        return this.int1 + this.int2 + this.getRandomInt(1,9);
    }

    //typisierung function
    //private let userNameGen: (int1: string, int2: string, randomNumb: number) => any;
}

