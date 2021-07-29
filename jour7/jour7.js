'## 02 - Map double'
var array = [1, 2, 3, 4, 5];
var double = array.map(function(tyudfjdc) {
    return 2 * tyudfjdc;
})

console.log(array);
console.log(double);


'## 03 - Map Names'

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
console.log("Type de longnames:", typeof longNames[0].firstName);
console.log(longNames[0].lastName);

/* 
var object = {
    key: <valeur>
}
*/
var shortNames = longNames.map(function(element) {
    return {
        name: `${element.firstName} ${element.lastName}`
    };
});

console.log(shortNames);

'## 04 - Filter numbers'

var array = [1, "toto", 34, "javascript", 8, -5];
var numbers = array.filter(function(element) {
    //return typeof element === "number";
    //return element > 0;
    //return isNaN(element) === false;
    return parseInt(element) === element;
})

console.log(numbers);

'##05 - Filter Even'

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function(element) {
    return element % 2 === 0;
});
console.log(even);


'##06 - Cakes'

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolatesCake = cakes.filter(function(element) {
    return element.flavor === "chocolate";
}).map(function(element) {
    element.status = "Sold out !";
    return element;
});

console.log(chocolatesCake);
