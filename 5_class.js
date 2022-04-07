// object-oriented programming
/*
not call burger by its properties-- objects are named abstractions for a collection of properties
properties: qualities/traits of an object.
defined in key(name of property): value(definition of that property) pairs
buns: sesame bun
key has to be string, values can be any data type

var burger = {
    buns: 'sesame",
    cheeseSlices: 2,
    pickles: true,
    tomatao: true,
    patties: 1
}

ACCESS OBJECTS
objectName.propertyName
objectName["propertyName"]

console.log = print

CONSTRUCTOR
functions that allow us to create objects of the same type quickly. avoid repeated code
parameters are the properties u want

function GroceryItem(name, price, inventory) {
    this.name = name
    this.price = price
    this.inventory = inventory
}
"this" passes key value to the parameter 
constructor, use it create an object

var apple = new GroceryItem('apple', 0.5,90)

PREDEFINED OBJECTS
array, date, math, string, function 
(other than data types listed in prior slides like string, boolean, etc) 
almost everything else in JAVASCRIPT is an object

inheritance: define relationships between objects. child object inherits properties from parent object
parent: CAR
child: racecar, truck

can nest objects--look at slides, big mac. put OBJECT INSIDE OBJECT

TPEO -> PEOPLE -> OFFICERS

JSON
JS is language of web
browser
reads a file
file asks for data from server
server has a lot of data, server sends it over iternet
it goes to ur browser, reads file, and then displays it to you

servers return data in JSON (from server to webpage)
understand JS objects is understand how to rea data from a server

DEMO
constructor
then an object
*/

function Student(FirstName, LastName, university, major, graduationYear) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.university = university;
    this.major = major;
    this.graduationYear = graduationYear;
    this.hasGraduated = graduationYear <=2021;  //set this value based on other values, so don't need put a parameter above
}

var brayden = new Student("Brayden", "Miller", "UT Austin", "CS", 2023);

console.log(brayden.major);
console.log(brayden["major"]);
console.log(brayden.hasGraduated);

//nested object
function Course(student, name, location) {
    this.student = student;
    this.name = name;
    this.location = location;

}

var introToJS = new Course(brayden, 'Intro to JavaScript', 'GDC 6.302'); 
//object inside object. create introtoJS object, with student object. get values from different objects
console.log(introToJS.student.graduationYear)
