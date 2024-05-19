#! /user/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generted number and show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess number between 1-6:",
    }
]);
console.log(answers);
if (answers.userGuessedNumber == randomnumber) {
    console.log("congratulation! you guessed right number.");
}
else {
    console.log("you gussed wrong number ");
}
