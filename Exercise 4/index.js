"use strict";
// TODO Write a program that checks if a given number is even or odd.
let num = 2;
let checkEvenOrOdd = (number) => {
    if (num % 2 === 0) {
        return console.log("This is an even number");
    }
    return console.log("This is an odd number");
};
checkEvenOrOdd(num);
