//Conditions, for loop
//switch statements aim to find ...
//switch for evaluate a pecific value
// if else, maybe better for range of values (grade example)
//can use switch for expressions, not just variables

//code reuse, use LOOPS: for, while, do...while loops

//break
// i ++ adds 1
for (var i = 0; i < 2; i++) {
    console.log(i);
} 

for (var num = 1; num <= 1024; num *=2) {
    console.log(num);
}
// last num is 2048, but won't be printed out

//while, just take middle expression in for loop
// var newAge = 21;
// var i = 0
// while (i < newAge) {
//    happyBirthday();
//    i++;
//}

//for loop translated to while loop
//beginning condition outside while loop

//break, can exit loops early
//break, tells swtich statement to exit switch statement

//return, terminate function early

function findTreasure(x, y) {
    var treasureX = 3;
    var treasureY = 9;

    if (x== treasureX && y== treasureY) {
        console.log("You found the treasure");
        return;
    }
    
    while(x!= treasureX) {
        if (x < treasureX) {
            console.log("Stepping to the right");
            x++;
        } else if (x>treasureX) {
            console.log("Stepping to the left.");
            x--;
        }
    }
    while(y!= treasureY) {
        if (y < treasureY) {
            console.log("Stepping north");
            y++;
        } else if (y>treasureY) {
            console.log("Stepping south");
            y--;
        }
    }
    console.log("You found it");
}
findTreasure(3,9);
findTreasure(6,3);
findTreasure(3,8);