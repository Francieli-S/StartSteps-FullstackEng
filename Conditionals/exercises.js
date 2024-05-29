let age = 15.5

if (age > 15) {
    console.log("You're not permitted to enter");
} else {
    console.log("You're permitted to enter");
}

//////////

let userAge = 'hi'
let legalDrinkingAge = 21

if (userAge >= legalDrinkingAge) {
    console.log("You're old enough to drink alcohol.");
} else {
    console.log("You're not old enough to drink alcohol.");
}

let retirementAge = 65

if (userAge < retirementAge) {
    console.log("You have more years until retirement.");
} else if (userAge === retirementAge) {
    console.log("You are at retirement age. Enjoy!");
} else {
    console.log("You are already past the retirement age.");
}

////////

if (userAge > 18) {
    console.log("Adult");
} else if (userAge >= 13) {
    console.log("Young adult");
} else if (userAge < 13 && userAge > 0) {
    console.log("Kid");
} else if (userAge === 0) {
    console.log("Baby");
} else {
    console.log("Error");
}
