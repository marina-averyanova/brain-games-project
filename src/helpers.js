import readlineSync from 'readline-sync';

export const getAnswer = question => readlineSync.question(`${question} `);

export const generateRandom = (min, max) => {
  const random = Math.random();
  return Math.floor(random * (max - min)) + min;
};

export const isEven = number => number % 2 === 0;
