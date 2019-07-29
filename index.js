const Word = require("./Word");
const inquirer = require ('inquirer');

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
