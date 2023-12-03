// TODO Write a program that determines if a person is eligible to vote based on their age.
let age: number = 18

let voteEligibility = (personAge: number) => {
    if (personAge >= 18) {
        return console.log("Eligible to vote");
    }
    return console.log("Non-eligible to vote");
}

voteEligibility(age)

