import readlineSync from 'readline-sync';

// Max count of rounds in any one game
export const MAX_ROUNDS = 3;

export function brainGamesGreetings() {
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console

  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`); // eslint-disable-line no-console
  return userName;
}

export const getUserInput = () => readlineSync.question('Your answer: ');

export const getRandomNumber = () => {
  const MIN = 1;
  const MAX = 100;

  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
};
