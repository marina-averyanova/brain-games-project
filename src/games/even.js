import { randomInt } from 'mathjs';
import { cons } from 'hexlet-pairs';
import run from '../runner';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const generateParams = () => {
  const question = randomInt(1, 30);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  run(description, generateParams);
};
