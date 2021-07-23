'use strict';

const readLineSync = require('readline-sync');
const chalk =require('chalk');

const userName = readLineSync.question(chalk.bold("Enter your name to start the game \n->"));


function display()
{
  console.clear();
  console.log(`
  █░░ █▀▀ ▀█▀ ▀ █▀   █▀█ █░░ ▄▀█ █▄█   █
  █▄▄ ██▄ ░█░ ░ ▄█   █▀▀ █▄▄ █▀█ ░█░   ▄
  `);

  console.log(chalk.bold.cyanBright(`Only A True Marvel Fan Can Pass This Superhero Test`));
  console.log('---------------------------------------------------\n')

  console.log(chalk.gray.bold(`All the best ${userName}! \n`))
}

display();

let score = 0;

function quiz(question, currentAnswer, reason)
{
  let userAnswer = readLineSync.question(question +"\n->");
  if(userAnswer === currentAnswer)
  {
    score++;
    console.log(`\n✔️  ${chalk.gray.bold(reason)}`);
  }
  else
  {
    console.log(`\n❌  ${chalk.gray.bold(reason)}`);
  }
  console.log(`Your score -> ${score}`);
  console.log("----------------\n");
}



let questions = [
  {
    question:"Which of these is NOT an infinity stone? (love | reality | space | time)",
    answer:"love",
    reason:"The six infinity stones are time, space, reality, mind, soul, and power."
  },
  {
    question:"What is Captain America's shield made out of? (iron | steal | aluminium | vibranium)",
    answer:"vibranium" ,
    reason:"Cap's shield is made from vibranium, the main export of Wakanda."
  },
  {
    question:"Who can lift Thor's hammer? (spiderman | ironman | shaktiman | captain america)",
    answer:"captain america" ,
    reason:"Captain America lifted Thor's hammer in Avengers: Infinity War."
  },
  {
    question:"What is Tony Stark's dad's name? (amar | akbhar | anthony | howard)",
    answer:"howard",
    reason:"Tony is the son of Howard Stark!"
  },
  {
    question:"What species did Loki discover he is? (Human |Asgardian |frost giant | god )",
    answer:"frost giant" ,
    reason:"Loki was born to Laufey, the leader of the Frost Giants, before he was adopted by Odin, the king of Asgard."
  }
];

for(let i=0; i<questions.length; i++)
{
  let askQuestion = questions[i].question;
  let correctAnswer = questions[i].answer;
  let reason = questions[i].reason;

  quiz(askQuestion, correctAnswer, reason)
}

console.log(chalk.bold.green(`${userName} you scored ${score}/${questions.length}`));