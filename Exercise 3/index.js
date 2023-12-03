"use strict";
// TODO Write a program that checks if a given number is positive, negative, or zero.
let numInput = -5;
let numInputChecker = (number) => {
    if (numInput === 0) {
        return console.log("The entered number is 0");
    }
    else if (numInput >= 0) {
        return console.log("The entered number is positive");
    }
    return console.log("The entered number is negative");
};
numInputChecker(numInput);
