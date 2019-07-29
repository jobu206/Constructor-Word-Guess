const Word = require("./Word");
const inquirer = require('inquirer');

const letterArray = 'abcdefghijklmnopqrstuvwxyz';

const mlbTrivia = [
     'baltimore orioles',
     'montreal expos',
     'bill buckner',
     'perfect game',
     'brooklyn dodgers',
     'joe dimaggio',
     'fenway park',
     'george brett',
     'michael jordan',
     'harry carey',
     'dominican republic',
     'jim palmer',
     'walt hriniak',
     'ted williams',
     'ricky henderson',
     'babe ruth',
     'ty cobb',
     'gaylord perry',
     'harold baines',
     'bart giamatti',
     'stephen strasburg',
     'miggy cabrera',
     'carl yazstremski',
     'the kid',
     'ernie banks'
];

let randomIndex = Math.floor(Math.random() * mlbTrivia.length);
let randomWord = mlbTrivia[randomIndex];

let computerWord = new Word(randomWord);

let requireNewWord = false;
let incorrectLetters = [];
let correctLetters = [];

let guessesLeft = 10;

function theLogic() {
     if (requireNewWord) {
          let randomIndex = Math.floor(Math.random() * mlbTrivia.length);
          let randomWord = mlbTrivia[randomIndex];

          computerWord = new Word(randomWord);

          requireNewWord = false;
     }

     wordComplete = [];
     computerWord.objArray.forEach(completeCheck);

     if (wordComplete.includes(false)) {
          inquirer.prompt([
               {
                    type: 'input',
                    message: 'Select a letter from A to Z',
                    name: 'userinput'
               }
          ]).then(function (input) {
               if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log('\nPlease try again!\n');
                    theLogic();
               } else {
                    if (
                         incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === ""
                    ) {
                         console.log('\nAlready Guessed or Nothing was Entered\n');
                         theLogic();
                    }
                    else {
                         let wordCheckArray = [];

                         computerWord.userGuess(input.userinput);

                         computerWord.objArray.forEach(wordCheck);
                         if (wordCheckArray.join('') === wordComplete.join('')) {
                              console.log('\nIncorrect\n');

                              incorrectLetters.push(input.userinput);
                              guessesLeft--;
                         } else {
                              console.log('\nCorrect!\n');

                              correctLetters.push(input.userinput);
                         }
                         computerWord.log();

                         // Print guesses left
                         console.log('Guesses Left: ' + guessesLeft + '\n');

                         // print letters guessed already
                         console.log(
                              'Letters Guessed: ' + incorrectLetters.join(' ') + '\n'
                         );
                         // Guesses Left
                         if (guessesLeft > 0) {
                              theLogic();
                         } else {
                              console.loq('You have Lost!\n')

                              restartGame();
                         }
                         function wordCheck(key) {
                              wordCheckArray.push(key.guessed);
                         }
                    }
               }
          })
     } else {
          console.log('You win!\n')
          restartGame();
     }
     function completeCheck(key) {
          wordComplete.push(key.guessed)
     }
}

function restartGame() {
     inquirer
          .prompt([
               {
                    type: 'list',
                    message: 'Would you like to:',
                    choices:['Play Again', 'Exit'],
                    name: 'restart'
               }
          ]).then(function(input){
               if(input.restart === 'Play Again') {
                    requireNewWord = true;
                    incorrectLetters = [],
                    correctLetters = [];
                    guessesLeft = 10;
                    theLogic();
               } else {
                    return;
               }
          });
}

theLogic()