export class MethodsUsernameGenerator {

    //Konstruktor
    constructor(private input1: string, private input2: string) {
    };

    //Methoden
    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public addInput() {
        console.log("username generated");
        return this.input1 + this.input2 + this.getRandomInt(1,9);
    }
}

