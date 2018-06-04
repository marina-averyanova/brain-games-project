import { randomInt } from 'mathjs';
import { cons } from 'hexlet-pairs';
import run from '../runner';

const description = 'What is the result of the expression?';

const actions = '+-*';
const plus = '+';
const minus = '-';
const multiplication = '*';

const calculate = (x, y, action) => {
  let answer;

  switch (action) {
    case plus:
      answer = x + y;
      break;
    case minus:
      answer = x - y;
      break;
    case multiplication:
      answer = x * y;
      break;
    default:
  }

  return answer;
};

const generateParams = () => {
  const x = randomInt(1, 10);
  const y = randomInt(1, 10);
  const action = actions[randomInt(3)];

  const question = `${x} ${action} ${y}`;
  const answer = calculate(x, y, action);

  return cons(question, `${answer}`);
};

export default () => {
  run(description, generateParams);
};
