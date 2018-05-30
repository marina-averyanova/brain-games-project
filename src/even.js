import { generateRandom, getAnswer, isEven } from './helpers';

const YES = 'yes';
const NO = 'no';
const MIN_NUMBER = 1;
const MAX_NUMBER = 30;
const START_ATTEMPT = 1;
const ATTEMPTS_COUNT = 3;

const askUser = (argument) => {
  console.log('Question: ', argument);
  return getAnswer('Your answer:');
};

const resolveCorrectAnswer = number => (isEven(number) ? YES : NO);

const run = (index) => {
  if (index > ATTEMPTS_COUNT) {
    return true;
  }
  const number = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const answer = askUser(number);
  const correctAnswer = resolveCorrectAnswer(number);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return run(index + 1);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const EVEN = 'even';
export const getDescription = () => `Answer "${YES}" if number even otherwise answer "${NO}".`;
export const getEvenResult = () => run(START_ATTEMPT);
