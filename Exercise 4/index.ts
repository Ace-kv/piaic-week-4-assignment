// TODO Write a program that checks if a given number is even or odd.
let num: number = 2

let checkEvenOrOdd = (number: number) => {
    if (num % 2 === 0) {
        return console.log("This is an even number");
    }
    return console.log("This is an odd number");
}

checkEvenOrOdd(num)
