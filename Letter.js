class Letter {
    constructor (letter) {
        this.letter = letter;
        this.letterGuessed = false;
    }
    noGuess () {
        if (this.letterGuessed === true) {
            return this.letter;
        } else {
            return "_";
        }
        // return (this.letterGuessed === true) ? this.letter : "_";
    }
    guessedLetter (letter) {
        if (this.letter === letter) {
            this.letterGuessed = true;
        }
    }

        
}
let letter = new Letter('a');
letter.guessedLetter('a');
console.log(letter.noGuess());

let letterArr = [
    Letter {
        letter: "H",
        letterGuessed: true
    },
    Letter {
        letter: "o",
        letterGuessed: false
    }
]