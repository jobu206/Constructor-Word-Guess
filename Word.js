const Letter = require("./Letter.js");

class Word {
    constructor (word) {
        this.word = word;
        this.wordGuessed = true;
    }
    noGuess () {
        if (this.wordGuessed === true) {
            return this.word;
        } else {
            return "_";
        }

        // return (this.letterGuessed === true) ? this.word : "_";
    }
}
let word = new Word('help');

console.log (word.noGuess());

