/* make sure in same folder, node file_name.js to print to terminal
timer, variable scope, code organization
slides, practice probs 
 control / to do whole line
*/

/*sometimes wnat to delay execution of part of our code, TIMER
set Timeout, delay executing a function
var timeoutID = setTimeout(functionToDelay, delayinMS, functionParameters);
    timeout key
 asynchronous (not go down line by line, follow the delay)
*/

// how to cancel setTimeout timers: clearTimeout(timeoutID ), clearInterval(intervalID)

// setInterval execute code at specified intervals (run setTimeout in a loop)
// var intervalID = setInterval(functionToDelay, delayinMS, function parameters)

// variable SCOPE
// block scope, like variable (must be in scope), anything that appears within open/close brackets
// not apply to JS. look over slides.

// variable HOISTING
// when interpreter goes down code, when declared variable is encountered, gives "undefined" as value
// not want a ton of global variables

// demo
var currentSecond = 1;

function printNumber() {
    console.log(currentSecond)
    currentSecond += 1;
}

// print one by one, from 1 to 15, every second
var intervalID = setInterval(printNumber, 1000);
setTimeout(clearInterval, 16000, intervalID);  // delay cancel the timer, want delay for 15 seconds, need to go to 16
// had number as parameter, just printed 1

//do practice