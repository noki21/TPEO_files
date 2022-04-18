function powersOfThree() {
    for (var num = 1; num <= 19683; num *= 3) {
        console.log(num)
        if (num == 3) {
            console.log('This is my favorite power of 3')
        }
    }
}
setTimeout(powersOfThree, 3000);

function everyTenSeconds () {
    var intervalId = setInterval(console.log, 10000, 'Hello world');
    setTimeout(clearInterval, 130000, intervalId);
}
everyTenSeconds();