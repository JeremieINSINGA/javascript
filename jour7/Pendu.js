var prompt = require("prompt");
var randomWords = require("random-words");

var wordLength = 5;
var mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
while (mysteryWord.length !== wordLength) {
  mysteryWord = randomWords({ exactly: 1, maxLength: wordLength })[0];
}

var schema = {
  properties: {
    letter: {
      description: "Enter a letter",
      pattern: new RegExp(`^[a-z]{1}$`),
      required: true,
    },
  },
};

var letters = [];

function displayMisteryWord() {
  return mysteryWord
    .split("")
    .map(function (letter) {
      if (letters.indexOf(letter) === -1) {
        return "_";
      } else {
        return letter;
      }
    })
    .join(" ");
}

function numberOfMissingLetters() {
  var missingLetters = mysteryWord.split("").filter(function (letter) {
    return letters.indexOf(letter) === -1;
  });

  return missingLetters.length;
}

function guess(remainingTry) {
  console.log(`Find the mystery word: ${displayMisteryWord()}`);

  prompt.get(schema, (err, result) => {
    letters.push(result.letter);

    if (numberOfMissingLetters() === 0) {
      console.log(`Congrats, you found the mystery word: ${mysteryWord}`);
    } else {
      remainingTry--;
      if (remainingTry === 0) {
        console.log(`You loose, the mistery word was: ${mysteryWord}`);
      } else {
        console.log(`Ooops... only ${remainingTry} ${remainingTry === 1 ? "chance" : "chances"}`);
        guess(remainingTry);
      }
    }
  });
}

prompt.start();
guess(10);