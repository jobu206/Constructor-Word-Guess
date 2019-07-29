const Letter = require('./Letter');

function Word(answer) {
    // Array to hold letters guessed
    this.objArray = [];

    for (let i = 0; i < answer.length; i++) {
        let letter = new Letter(answer[i]);
        this.objArray.push(letter);        
    }

    this.log = function () {
        let answerLog = "";
        for(let i = 0; i < this.objArray.length; i++) {
            answerLog += this.objArray[i] + " ";
        }
        console.log(answerLog + "\n------------------------")
    }

    this.userGuess = function(input) {
        for (let i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input);
        }
    }
}

module.exports = Word;