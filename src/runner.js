import readlineSync from 'readline-sync';

export default (description, getQuestion, getAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  const run = (attempt) => {
    if (attempt > 3) {
      return true;
    }
    const question = getQuestion();
    const answer = getAnswer(question);

    console.log(`Question: ${(question)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
      return run(attempt + 1);
    }
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    return false;
  };

  const resultMessage = run(1) ? 'Congratulations' : 'Let\'s try again';
  console.log(`${resultMessage}, ${userName}!`);
};
