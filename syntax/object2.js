// This function 'f' is a simple function that logs two arithmetic operations
// It performs addition and outputs the results using console.log
// The function is later used both in an array and as an object property
var f = function () {
    console.log(1 + 1);
    console.log(1 + 2);
}

// Creates an array 'a' with a single element - the function 'f'
var a = [f];
// Calls the function stored at index 0 of array 'a'
a[0]();

// Creates an object 'o' with a property 'func' that references function 'f'
var o = {
    func: f
}
// Calls the function stored in the 'func' property of object 'o'
o.func();
