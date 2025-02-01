console.log(Math.round(1.6));
console.log(Math.round(1.4));

function Sum(first, second) {  // parameter
    console.log('a');
    return first + second;  // return 시 즉시 함수 종료
    console.log('b');
}

console.log(Sum(2, 4));  // argument