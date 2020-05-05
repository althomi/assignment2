
    const button = document.getElementById('buttonReg') as HTMLButtonElement;
    const input1 = document.getElementById('name') as HTMLInputElement;
    const input2 = document.getElementById('surname') as HTMLInputElement;
    const username = document.getElementById('username') as HTMLInputElement;



    function addInput(in1: string, in2: string) {
        return in1 + in2
    }

    button.addEventListener('click', function () {
        console.log(addInput(input1.value, input2.value));
        //numer: console.log()addInput(+input1.value, +input2.value)

    });

    //add random number to username
    function randomNumber() {
        console.log(Math.random()*10)
    }


