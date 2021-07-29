// Exercice 1 - Object
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};
console.log(cat);
console.log(cat.age);

if (cat.isCute) {
    console.log("So cute !");
}

// Exercice 2 - Combine

var cat2 = {
    name: "Felix",
    age: 20,
    isCute: false
};
console.log(cat2);
var cats = [cat, cat2];
console.log(cat.age);
console.log(cat2.isCute,);

// Exercice 3 - Even

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkIfEven(3);
checkIfEven(4);
checkIfEven(543);
checkIfEven(86734319);

// Exercice 4 - Compare
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
    } else if (num2 > num1) {
        console.log(`${num2} is bigger`);
    } else {
        console.log("Both are the same");
    }
}

compare(12, 10);
compare(1, 10);
compare(10, 10);

// Exercice 5 - Add up

function addUp(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

var result = addUp(12);
console.log(result);
addUp(12);


//Exercice 6//



function adamaFormat(num) {
    var hours = Math.floor(num / 3600);
    var rest = num - hours * 3600;
    var minutes = Math.floor(rest / 60);
    var seconds = rest - minutes * 60;
    console.log(hours + " : " + minutes + " : " + seconds);


}


adamaFormat(3700);

// Bonus 1 - Generate password
function generatePassword(num) {
    var max = 122;
    var min = 48;
    var password = "";

    if(num >= 6 && num <=15) {
	    for (var i = 0; i < num; i++) {
	        var randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
	        while (randomIndex >= 58 && randomIndex <= 64) {
	            randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
	        }
	        var letter = String.fromCharCode(randomIndex);
	        password += letter;
	    }

	    console.log(password);
	}
     else {
		console.log("error!!");
	}
}
generatePassword(10);

// Bonus 2 - Jeu de dé
function launchDice(numberOfDice) {
    var min = 1;
    var max = 6;
    var sum = 0;
    for (var i = 0; i < numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (max - min + 1) + min);
        sum += dice;
    }
    return sum;
}

var joueur1 = launchDice(5);
var joueur2 = launchDice(5);
if (joueur1 > joueur2) {
    console.log("Joueur 1 a gagné")
} else if (joueur1 < joueur2) {
    console.log("Joueur 2 a gagné")
} else {
    console.log("Egalité");
}
