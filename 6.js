/*
strings, primitives, arrays, numbers

strings = sequence of characters (text)

define strings literally (put in quotes) = string primitive 
    var string = 'hello';
define strings as objects 
    using the String() constructor:

JS auto converts primitives into objects under the hood (act as same)

STRINGS BEHAVE AS OBJECTS

STRINGS ARE IMMUTABLE (content of string is unmodifiable and read-only)
    if try change, JS will just print out og string

STRING CONCAT
    string1 + string 2
    string1.concat(string2, ...)

ACCESS INDIVIDUAL CHARS
    string[index]
    string.charAt(index)

HOW TO SUBSTRING
slice
    string.slice(beginIndex)
    string.slice(beginIndex, endIndex)
    endIndex is non-inclusive = everything up to ___
these parameters are optional
indexes can be negative (going backwards).
    for negative indexes, add string length to it, is the equivalent (in positive numbers) 

string.length 

substring

string.substring(beginIndex)
string.substring(beginINdex, endIndex)

differnces from slice
-negative values are treated as 0 -> so beginIndex = 0
-if beginindex> endINdex, the two are swapped

FIND SOMETHING IN STRINGS (location of string within string)
    string.indexOf('characters') --returns index of first occurence of characters in string, return -1 if DNE
    string.lastIndexof('char') --returns index of last occurrence of 'char' in strings, -1 if DNE

CHANGE STRING CASING
    string.toUpperCase()
    string.toLowerCase()

ARRAYS
    an ordered list of values. 
    the array values / elemnts in a single array can be of any type and length is NOT FIXED.

    assigned index values

    ADD ITEMS
    var flowers = [...]
    flowers.push('aaa') add to end
    flowers.unshift('bbb') add item to beginning

    REMOVE items
    flowers.pop()  remove item from end
    flowers.shift() remove item from beginning
    returns item being moved

    MERGE
    concat
    array1.concat(array2)

NUMBER OPS
    all numbers are 64-bit floating numbers (no types of int, double, float)

    Number operators
    i++
    i--
    i += n
    i -= n
    i *= n
    i /= n
    i %= n (remainder)

    Infinity
    Nan

var i = 0
var j = i++

this means j = i, then increments
so j = 0, i = 1

if flip order, both equal 1

arrays
can have any number of dimensions
if have 2 brackets, like a table (rows and columns)
if have 1 bracket, just rows
var flowers = [];
*/


// demo
//cut off last character, last 6 characters
function truncate(string, number) {
    return string.substring(0, string.length - number);
}

console.log(truncate('Hello World!', 1));
console.log(truncate('Javascript',6));

// array is passed through here
function capitalizefirstletter(strings) {
    for (var i = 0; i < strings.length; i++) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].substring(1);
        //access word in array, then get first letter in word
    }
    return strings;
}

console.log(capitalizefirstletter(['noah', 'kim']));

// function swapcase(string) {
//     var lowercase = string.toLowercase();
//     var uppercase = string.toUpperCase();
//     var newstring = '';

//     for (var i = 0; i < string.length; i++) {
//         if (string[i]) == uppercase[i])
//             newstring += lowercase[i];
//          } else {
//              newstring += uppercase[i];
//          }
//          return newstring;
// }
// check on video
