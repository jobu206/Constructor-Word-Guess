const Letter = require('Letter');

function Word(answer) {
    // Array to hold letters guessed
    let wordArr = [];
    // Take the letters and create new object and push said object into above array.
    for (let i = 0; i < wordArr.length; i++) {
        let letter = new Letter(answer[i]);
        this.wordArr.push(letter);
    }
}

module.exports = Word;