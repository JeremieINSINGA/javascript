// 01 - Array

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove

var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
objects.pop();
console.log(objects);
objects.push("laptop");
objects.shift();
console.log(objects);

// 04 - Order

var numbers = [4, 10, 8, 12, 6];
numbers = numbers.reverse();
console.log(numbers);
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);

// 05 - Boucle

var total = 0;
var limit = 10;
for (i = 0; i <= limit; i++) {
  total = total + i;
}
console.log(total);

// 06 - Reverse

var string = "Hello Konexio !";
var splitted = string.split("");
var reversed = [];
for (i = 0; i <= splitted.length; i++) {
  reversed.unshift(splitted[i]);
}
var result = reversed.join("");
console.log(result);

// Bonus

for (i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 3 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("");
  } else {
    console.log(i);
  }
}

// Bonus II

total = 0;
limit = 10;
i = 0;
while (i <= limit) {
  total = total + i;
  i++;
}
console.log(total);

// Bonus III

var promo = ["a", "b", "c", "d"];
var min = 0;
var max = promo.length - 1;
var random = Math.floor(Math.random() * (max - min + 1));
console.log(promo[random]);

// Bonus IV

var arr = [];
var min = 0;
var max = 100;
for (i = 0; i < 20; i++) {
  var random = Math.floor(Math.random() * (max - min + 1));
  arr.push(random);
}

var arrayMax = arr[0];
for (i = 1; i < 20; i++) {
    if (arr[i] > arrayMax) {
        arrayMax = arr[i];
    }
} 
console.log(arrayMax);
