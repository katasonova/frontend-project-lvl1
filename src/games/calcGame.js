#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { brainGamesGreetings, getRandomNumber, MAX_ROUNDS } from '../index.js';

export default function calcGame() {
  const userName = brainGamesGreetings();

  console.log('What is the result of the expression?'); // eslint-disable-line no-console

  while (winScore < MAX_ROUNDS) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    
    console.log(`Question: ${randomNumber1 }`); // eslint-disable-line no-console

//     getUserInput();
//     const calculatedResult = isEven(randomNumber);

//     if (userInput.toString() === calculatedResult.toString()) {
//       console.log('Correct!'); // eslint-disable-line no-console
//       winScore += 1;
//     } else {
//       console.log(`"${userInput.toString()}" is wrong answer ;(. Correct answer was "${calculatedResult.toString()}".`); // eslint-disable-line no-console
//       console.log(`Let's try again, ${userName}!`); // eslint-disable-line no-console
//       return;
//     }
  }

//   if (winScore === 3) {
//     console.log(`Congratulations, ${userName}!`); // eslint-disable-line no-console
//   }
}