//1
function countby3() {
    for (var number = 0; number <=30; number +=3) {
        console.log(number)
    }
}
countby3();

//2
function guessMyFavNum(guess) {
    if (guess ==3) {
        console.log('You guessed my favorite number');
    } else {
        console.log('try again');
    }
}
guessMyFavNum(3);
guessMyFavNum(10);
guessMyFavNum(15);

//3

function convertNumberDay(number) {
    switch (number) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("This number doesn't convert to a day of the week.");
    }
}
convertNumberToDay(0); 
convertNumberToDay(1); 
convertNumberToDay(2); 
convertNumberToDay(3); 
convertNumberToDay(4); 
convertNumberToDay(5); 
convertNumberToDay(6); 
convertNumberToDay(7);