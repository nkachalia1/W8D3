class Clock {
    constructor() {
        const currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        this._tick();
        setInterval(this._tick.bind(this), 1000);

    }

    printTime() {
        const timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(timeString);
    }

    _tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours === 24) {
                    this.hours = 0;
                }
            }
        }

        this.printTime();


    }

}

// const clock = new Clock();



// ------------------------------------------------------------


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function completionCallback(sum) {
    // print total sum
    console.log(`total sum = ${sum}`);

    // close readline
    reader.close();
}


function addNumbers(sum, numsLeft, completionCallback){

    reader.question("What is number? : ", function (answer) {

            const parsed = parseInt(answer);
            sum += parsed;
            console.log(`sum = ${sum}`);

            numsLeft--;

            if (numsLeft === 0) {
                completionCallback(sum);
            } else {
                addNumbers(sum, numsLeft, completionCallback);
            }
      })

}


addNumbers(0, 3, completionCallback);