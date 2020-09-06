/*
    2. Even Position Element
Write a function that finds the elements at even positions in an array.
The input comes as array of string elements.
The output is the return value of your function. Collect all elements in a string, separated by space.
*/

function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i += 2) {

        result.push(input[i]);
    }
    return result.join(' ');
}

console.log(solve(['20', '30', '40']));