'#01 - Calculator'

function calculate2(number1, number2, operator) {
    switch (operator) {
        case "+" : {
            return number1 + number2;
        }
        case "-" : {
            return number1 - number2;
        }
        case "x" : {
            return number1 * number2;
        }
        case "/" : {
            return number1 / number2;
        }
        case "%" : {
            return number1 % number2;
        }
        default: {
            console.log(`${operator} is not managed by our calculator`);
        }
    }
}

function calculate(number1, number2, operator) {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "x") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else if (operator === "%") {
        return number1 % number2;
    } else {
        console.log(`${operator} is not managed by our calculator`);
    }
}

console.log(process.argv);

if (process.argv.length !== 5) {
    console.log("Error: I'm expecting 3 parameters");
} else {
    var result = calculate(parseInt(process.argv[2]), parseInt(process.argv[4]), process.argv[3]);
    console.log(result);
}

'##02 - Table'

function multiply(number) {
    for (var i = 1; i <= 10; i++) {
        // 5 x 6 = 30
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiply(parseInt(process.argv[2]));
```

```jsx
function multiply(number) {
    for (var i = 1; i <= 10; i++) {
        // 5 x 6 = 30
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

function addition(number) {
    for (var i = 1; i <= 10; i++) {
        // 5 x 6 = 30
        console.log(`${number} + ${i} = ${number + i}`);
    }
}

module.exports = {
    multiply,
    addition
}

'## ##03 Separate Table'

var {multiply, addition} = require("./table-utils.js");

// qu'est ce que je veux afficher ? 
// une table de multiplication
// number ? string ? boolean ? array ? object ? null  ? undefined ? 

if (process.argv.length !== 4) {
    console.log("Error");
} else {
    // 6
    multiply(parseInt(process.argv[2]));
    //console.log(result.join("\n"));
    
    // 8
    addition(parseInt(process.argv[3]));
}

'##04 - Guess'
var prompt = require("prompt");

var mysteryNumber = Math.floor(Math.random() * 100 + 1);

console.log(mysteryNumber);
var schema = {
    properties: {
        number: {
            description: "Quel est le nombre mystère ?",
            pattern: /^\d{1,3}$/,
            required: true,
            message: "Entrez un nombre entre 1 et 100"
        }
    }
}
function guess() {
    prompt.get(schema, (err, result) => {
        var number = parseInt(result.number);
        if (number === mysteryNumber) {
            console.log("Bravo");
        } else if (number > mysteryNumber) {
            console.log("C'est moins");
            guess();
        } else {
            console.log("C'est plus");
            guess();
        }
    })
}

prompt.start();

guess();

