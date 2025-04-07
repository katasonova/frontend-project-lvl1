import readlineSync from 'readline-sync';

// Max count of rounds in any one game
export const MAX_ROUNDS = 3;
export const MAX_NUMBER = 100;
export const MIN_NUMBER = 1;

export const brainGamesGreetings = () => {
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console

  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`); // eslint-disable-line no-console
  return userName;
};

export const getUserInput = () => readlineSync.question('Your answer: ');

export const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => Math.floor(
  Math.random() * (max - min + 1) + min,
);

const logCorrectAnswer = () => console.log('Correct!'); // eslint-disable-line no-console

const logWrongAnswer = (userInput, calculatedResult, userName) => {
  console.log(`"${userInput}" is wrong answer ;(. Correct answer was "${calculatedResult}".`); // eslint-disable-line no-console
  console.log(`Let's try again, ${userName}!`); // eslint-disable-line no-console
};

export const compareResults = (result1, result2, userName) => {
  if (result1 === result2) {
    logCorrectAnswer();
    return true;
  }
  logWrongAnswer(result1, result2, userName);
  return false;
};

export const logCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`); // eslint-disable-line no-console
};
