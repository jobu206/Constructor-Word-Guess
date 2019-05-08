function Letter(letter) {
    this.letter = letter;
    this.letterGuessed = false;

    this.getLetter = function () {
        if (this.letterGuessed) {
            return this.letter;
        } else {
            return "_";
        }
    }

    this.checkGuess = function (guess) {
        if (guess === this.letter) {
            this.letterGuessed = true;
        }
    }
}

module.exports = Letter;