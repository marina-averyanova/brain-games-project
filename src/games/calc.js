import { cons, car, cdr } from 'hexlet-pairs';
import * as math from 'mathjs';

export const description = 'What is the result of the expression?';

export const getQuestion = () => {
  const expression = cons(cons(math.randomInt(1, 10), math.randomInt(1, 10)), '+-*'[math.randomInt(3)]);
  return `${car(car(expression))} ${cdr(expression)} ${cdr(car(expression))}`;
};

export const getAnswer = expression => `${math.eval(expression)}`;
