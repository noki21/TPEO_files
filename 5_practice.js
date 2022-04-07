// review HW, second one is nested object
function Car(model, year, color, mpg) {
    this.model = model
    this.year = year
    this.color = color
    this.mpg = mpg
}

var Hyundai = new Car('Sonata', '2012', 'blue', '27');
var Lexis = new Car('Sedan', '2019', 'black', '30');
var Toyota = new Car('Avalon', '2014', 'silver', '25');

console.log(Hyundai.mpg);
console.log(Lexis.mpg);
console.log(Toyota.mpg);

function Vehicle(car) {
    this.car = car
}
var test1 = new Vehicle(Hyundai);
var test2 = new Vehicle(Lexis);
var test3 = new Vehicle(Toyota);

console.log(test1.car.mpg);
console.log(test2.car.mpg);
console.log(test3.car.mpg);

// previously not work because had Hyundai in place of car. 