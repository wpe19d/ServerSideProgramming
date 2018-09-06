var readLine = require('readline-sync');
var area = 0;

while(!length || isNaN(length) || length < 6 || length > 20) {

    var length = readLine.question("What is the length of the shed?: ");
}
while(!width || isNaN(width) || width < 0) {

    var width = readLine.question("What is the width of the shed?: ");
}
while(!numberOfWindows || isNaN(numberOfWindows) || numberOfWindows < 0 || numberOfWindows > 3) {

    var numberOfWindows = readLine.question("How many windows will be installed?: ");
}

console.log(getNetArea(length, width, numberOfWindows));

function getNetArea(length, width, numberOfWindows) {
    return ((length * width) - (numberOfWindows * (18 * 27)) - (72 * 80));
}