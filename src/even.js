import readlineSync from 'readline-sync';

const YES = 'yes';
const NO = 'no';
const MIN_NUMBER = 1;
const MAX_NUMBER = 30;
const START_ATTEMPT = 1;
const ATTEMPTS_COUNT = 3;

const askUser = question => readlineSync.question(`${question} `);

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const run = (attempt) => {
  if (attempt > ATTEMPTS_COUNT) {
    return true;
  }
  const number = generateRandom(MIN_NUMBER, MAX_NUMBER);
  console.log(`Question: ${number}`);
  const answer = askUser('Your answer:');
  const correctAnswer = number % 2 === 0 ? YES : NO;

  if (answer === correctAnswer) {
    console.log('Correct!');
    return run(attempt + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');

  const userName = askUser('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log('');

  const resultMessage = run(START_ATTEMPT) ? 'Congratulations' : 'Let\'s try again';
  console.log(`${resultMessage}, ${userName}!`);
};
