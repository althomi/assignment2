
    const button = document.getElementById('buttonReg') as HTMLButtonElement;
    const input1 = document.getElementById('name') as HTMLInputElement;
    const input2 = document.getElementById('surname') as HTMLInputElement;
    const username = document.getElementById('username') as HTMLInputElement;
    let random: number = Math.floor(Math.random() *10);
    let userNameNumber;



    function addInput(in1: string, in2: string, randomNumb: number) {
        return in1 + in2 +  randomNumb;
    }

    //weist funktion typisiert einer variablen zu
    let userNameGen: (int: string, int2: string, randomNumb: number) => any;

    button.addEventListener('click', function () {
        console.log(addInput(input1.value, input2.value, random));
        //document.getElementById('username').innerHTML = addInput();
        //number: console.log()addInput(+input1.value, +input2.value)

    });

    //add random number to username
    function randomNumber() {
    }
