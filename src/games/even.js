import * as math from 'mathjs';

export const description = 'Answer "yes" if number even otherwise answer "no".';

export const getQuestion = () => `${math.randomInt(1, 30)}`;

export const getAnswer = number => (+number % 2 === 0 ? 'yes' : 'no');
