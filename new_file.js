// class Clock {
//     constructor() {
//         const currentTime = new Date();
//         this.hours = currentTime.getHours();
//         this.minutes = currentTime.getMinutes();
//         this.seconds = currentTime.getSeconds();

//         this._tick();
//         setInterval(this._tick.bind(this), 1000);

//     }

//     printTime() {
//         const timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
//         console.log(timeString);
//     }

//     _tick() {
//         this.seconds++;
//         if (this.seconds === 60) {
//             this.seconds = 0;
//             this.minutes++;
//             if (this.minutes === 60) {
//                 this.minutes = 0;
//                 this.hours++;
//                 if (this.hours === 24) {
//                     this.hours = 0;
//                 }
//             }
//         }

//         this.printTime();


//     }

// }

// // const clock = new Clock();



// // ------------------------------------------------------------


// const readline = require('readline');

// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)

//   input: process.stdin,
//   output: process.stdout
// });


// function completionCallback(sum) {
//     // print total sum
//     console.log(`total sum = ${sum}`);

//     // close readline
//     reader.close();
// }


// function addNumbers(sum, numsLeft, completionCallback){

//     reader.question("What is number? : ", function (answer) {

//             const parsed = parseInt(answer);
//             sum += parsed;
//             console.log(`sum = ${sum}`);

//             numsLeft--;

//             if (numsLeft === 0) {
//                 completionCallback(sum);
//             } else {
//                 addNumbers(sum, numsLeft, completionCallback);
//             }
//       })

// }


// addNumbers(0, 3, completionCallback);


// // ------------------------------------------------------------


Function.prototype.myBind = function(context) {
    return () => {return this.apply(context)};
}

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }

  const turnOn = function() {
    console.log("Turning on " + this.name);
  };

  const lamp = new Lamp();

  turnOn(); // should not work the way we want it to

  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);

  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"


// // ------------------------------------------------------------


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function callback(x) {
    console.log(x);
    return x;
}

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell you whether el1 > el2; pass true back to the
    // callback if true; else false.
        reader.question(`Is ${el1} greater than ${el2}? : `, function (answer) {
            if (answer === "yes") {
                return callback(true);
            } else {
                return callback(false);
            }
        })
}

askIfGreaterThan(1,2,callback);

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  let sorted = false;

  while (!sorted) {
    sorted = true;
    for(let i = 0; i < arr.length-1; i++) {
        if (askIfGreaterThan(el1, el2, callback) === true) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            sorted = false;
        }
    }
    absurdBubbleSort(arr, sortCompletionCallback).outerBubbleSortLoop(!sorted);
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
