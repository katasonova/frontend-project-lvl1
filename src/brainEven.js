#!/usr/bin/env node
import brainGamesGreetings from "../src/cli.js";
import readlineSync from 'readline-sync';

let userInput;
let winScore = 0;

const getRandomNumber = () => {
    const MIN = 1;
    const MAX = 100;

    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

const getUserInput = () => {
    userInput = readlineSync.question('Your answer: ');
}

const isEven = (number) => {
    if (number % 2 === 0) {
        return 'yes'
    } else {
        return 'no'
    }
}

export default function brainEvenGame() {

    const userName = brainGamesGreetings();

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    while (winScore < 3) {
        let randomNumber = getRandomNumber()
        console.log(`Question: ${randomNumber}`)

        getUserInput()
        let calculatedResult = isEven(randomNumber)

        if (userInput.toString() === calculatedResult.toString()) {
            console.log('Correct!')
            winScore += 1;
        } else {
            console.log(`"${userInput.toString()}" is wrong answer ;(. Correct answer was "${calculatedResult.toString()}".`)
            console.log(`Let's try again, ${userName}!`)
            return;
        }
    }

    if (winScore === 3) {
        console.log(`Congratulations, ${userName}!`)
    }
    
}