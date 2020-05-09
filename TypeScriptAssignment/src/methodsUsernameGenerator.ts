export class MethodsUsernameGenerator {

    //Konstruktor
    constructor(private int1: string, private int2: string) {
    };

    //Methoden
    private static getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public addInput() {
        console.log("username generated");
        return this.int1 + this.int2 + MethodsUsernameGenerator.getRandomInt(1,9);
    }
}

