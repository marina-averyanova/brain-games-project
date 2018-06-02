import readlineSync from 'readline-sync';

const askUser = question => readlineSync.question(`${question} `);

const welcome = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
};

const getUserName = () => {
  const userName = askUser('May I have your name?');
  console.log(`Hello, ${userName}`);
  console.log('');
  return userName;
};

export default (game) => {
  welcome(game.description);

  const userName = getUserName();

  const run = (attempt) => {
    if (attempt > 3) {
      return true;
    }
    const question = game.getQuestion();
    const answer = game.getAnswer(question);

    console.log(`Question: ${(question)}`);
    const userAnswer = askUser('Your answer:');

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
