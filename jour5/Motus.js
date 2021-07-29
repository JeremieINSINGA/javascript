var prompt = require("prompt");
var randomWords = require('random-words');
var colors = require('colors');

var wordLength = 3;
var mysteryWord = randomWords({exactly: 1, maxLength: wordLength})[0];
while (mysteryWord.length !== wordLength) {
    mysteryWord = randomWords({exactly: 1, maxLength: wordLength})[0];
}

var schema = {
    properties: {
        word: {
            description: "Quel est le mot mystère ?",
            pattern: new RegExp(`^[a-z]{${wordLength}}$`),
            required: true,
            message: `Entrez un mot de ${wordLength} lettres`
        }
    }
}
function guess() {
    prompt.get(schema, (err, result) => {
        if (result.word === mysteryWord) {
            console.log("Oh yeah !!!!");
        } else {
            var answer = result.word.split("");
            var letters = {}
            for (var i = 0; i < wordLength; i++) {
                var letter = result.word[i];
                if (letter === mysteryWord[i]) {
                    answer[i] = letter.red;
                    letters[letter] = i + 1;
                } 
            }
            for (var i = 0; i < wordLength; i++) {
                var letter = result.word[i];
                 if (mysteryWord.indexOf(letter) > -1) {
                    if (letters.hasOwnProperty(letter)) {
                        if (mysteryWord.indexOf(letter, letters[letter]) > -1) {
                            answer[i] = letter.yellow;
                            letters[letter] = i + 1;
                        }
                    } else {
                        answer[i] = letter.yellow;
                        letters[letter] = i + 1;
                    }
                }
            }
            console.log(answer.join(""));
            guess();
        }
    })
}

prompt.start();

guess();
