//1
function reverse(string) {
    var reversedString = '';
    for (var i = string.length -1; i >=0; i--) {
        reversedString += string[i];
    }
    return reversedString
}
console.log(reverse("hey"));
console.log(reverse("Coding")); 
console.log(reverse("JavaScript!")); 


//2
function numVowels(string) {
    var numVowels = 0;
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        var currentCharacter = string[i];
        if (currentCharacter === 'a' || currentCharacter ==='e' || currentCharacter ==='i' ||
        currentCharacter === 'o' || currentCharacter ==='u') {
            numVowels ++;
        }
    }
    return numVowels;
}

console.log(numVowels("aaaeeeiiiooouuu")); 
console.log(numVowels("b"));
console.log(numVowels("aeiouAEIOU")); 

//3
function numStringsShorterThanLength(strings, length) {
    var numStringsShorterThanLength = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            numStringsShorterThanLength++;
        }
    }
    return numStringsShorterThanLength;
}
console.log(numStringsShorterThanLength(["abc", "def"], 4)); 
console.log(numStringsShorterThanLength(["abc", "def"], 3)); 
console.log(numStringsShorterThanLength(["abc", "def", "abcdef"], 4)); 

function NumStringLessThanLength(strings, length) {
    var number = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            number ++;
        }
    }
    return number
}