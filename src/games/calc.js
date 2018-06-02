import { randomInt, eval as evalExpression } from 'mathjs';
import run from '../runner';

const actions = '+-*';

const description = 'What is the result of the expression?';

const getQuestion = () => {
  const x = randomInt(1, 10);
  const y = randomInt(1, 10);
  const action = actions[randomInt(3)];
  return `${x} ${action} ${y}`;
};

const getAnswer = stringExpression => `${evalExpression(stringExpression)}`;

export default () => run(description, getQuestion, getAnswer);
