/*
Object Oriented Programming
week 7

MODIFY OBJECT
--
Update propoerty
    objectName.propertyName = newValue

ADD NEW PROPERTY
    objectName.newPropertyname = newValue
--

PROTOTYPE is parent for object
objects in JS inherit default properties from prototypes
prototypes are built in blueprints that all objects inherit from

so can call function for an object (like push) without define
function get properties from respective prototypes like function.prototype
object is chain of inheritance of prototypes

object.prototype is at top (so every object is related to this)

var vehicle
var car

vehicle is parent, 
car inherits properties from vehicle

car.__proto__ = vehicle; 
prototypal inheritance

vehicle is prototype

animal is prototype for dog

--
this keyword

refers to object it belongs to.
whatever object "THIS" is inside of, referring to that object, and get those properties

THIS inside of an object, THIS is refeering to that object, can refer to those properties with THIS
--

REVISIT CONDO OPERATORS
===
!==
compare value and type of what is being compared, do not do type coercion. 

== (will do type coercion, will convert to same types, then compare)



*/