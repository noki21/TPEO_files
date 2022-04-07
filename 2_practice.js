function sumOfSquareAreas(a,b) {
    return ((a**2) + (b**2));
}
var sum = sumOfSquareAreas(3,9);
var sum2 = sumOfSquareAreas(10,5);
var sum3 = sumOfSquareAreas(2, 10);

console.log(sum);
console.log(sum2);
console.log(sum3);

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    var total_avg = (homeworkAvg*0.1) + (quizAvg * .15) + (examAvg*.75)
    return total_avg;
}

var grade = gradeCalculator(95, 90, 90);
var my_grade = gradeCalculator(90, 95, 99);
var my_friend_grade = gradeCalculator(80, 85, 75);

console.log(grade);
console.log(my_grade);
console.log(my_friend_grade);