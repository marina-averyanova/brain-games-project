import readlineSync from 'readline-sync';

const attemptCount = 3;

export const runGame = (description, attemptRunner) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  let result = true;
  let attempt = 1;
  while (attempt <= attemptCount && result === true) {
    result = attemptRunner();
    attempt += 1;
  }

  const resultMessage = result ? 'Congratulations' : 'Let\'s try again';
  console.log(`${resultMessage}, ${userName}!`);
};

export const runAttempt = (question, answer) => {
  console.log(`Question: ${(question)}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (answer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
  return false;
};
