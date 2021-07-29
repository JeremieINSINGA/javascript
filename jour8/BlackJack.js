var prompt = require("prompt");

prompt.start();
var schema = {
  properties: {
    action: {
      description: "do you want to draw a card or pass?",
      required: true,
    },
  },
};

var max = 21;
var min = 16;
var bankCards = Math.floor(Math.random() * (max - min) + min);
var playerCards = 0;

function play() {
    prompt.get(schema, function(error, result) {
        if (result.action === "draw") {
            var max = 10;
            var min = 1;
            playerCards += Math.floor(Math.random() * (max - min) + min);
            console.log(`Your card worth: ${playerCards}`);
            if (playerCards > 21) {
                console.log("You loose");
            } else {
                play();
            }
        } else {
            console.log(`The bank had ${bankCards}`);
            if (playerCards === 21) {
                console.log("Black Jack, you win");
            } else if (playerCards > bankCards) {
                console.log("You win");
            } else {
                console.log("You loose");
            }
        }
    })
}

play();

var prompt = require("prompt");

prompt.start();
var schema = {
  properties: {
    action: {
      description: "do you want to draw a card or pass?",
      required: true,
    },
  },
};

var max = 21;
var min = 16;
var bankCards = Math.floor(Math.random() * (max - min) + min);
var playerCards = 0;

function play() {
    prompt.get(schema, function(error, result) {
        if (result.action === "draw") {
            var max = 10;
            var min = 1;
            playerCards += Math.floor(Math.random() * (max - min) + min);
            console.log(`Your card worth: ${playerCards}`);
            if (playerCards > 21) {
                console.log("You loose");
            } else {
                play();
            }
        } else {
            console.log(`The bank had ${bankCards}`);
            if (playerCards === 21) {
                console.log("Black Jack, you win");
            } else if (playerCards > bankCards) {
                console.log("You win");
            } else {
                console.log("You loose");
            }
        }
    })
}

play();
