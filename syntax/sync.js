var fs = require('fs');

/*
//readFileSync - 동기식
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

//readFile - 비동기식
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function (err, result) {
    console.log(result);
});
console.log('C');