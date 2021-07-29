
    var grid = [
	["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];


    var rover={
        direction : "N",
        X: 0,
        Y: 0,
        travelLog[] 
        }

console.log(grid);
console.log(rover.x, rover.y, rover.direction);

function turnRight(rover) {
    if       (rover.direction="N")
             rover.direction="E";

    else if      (rover.direction="E")
                  rover.direction="S";

    else if      (rover.direction="S")
                  rover.direction="O";

    else if      (rover.direction="O")
                  rover.direction="N";
    

console.log (rover);
grid [rover.y][rover.x] = rover.direction;
}


    function turnLeft() {

        if   (rover.direction="N")
              rover.direction="O";

else if      (rover.direction="O")
             rover.direction="S";

else if      (rover.direction="S")
             rover.direction="E";

else if      (rover.direction="E")
             rover.direction="N";



    console.log (rover);
    }
    function moveForward(){



       if (rover.direction===N){
           rover.x++;
       }
       if (rover.direction===E){
           rover.x++;
       }
       if (rover.direction===S){
           rover.x++;
       }
       if (rover.direction===O){
          rover.x++;
       }
   };

const { Console } = require("console");
var prompt = require ("prompt");

prompt.start();

prompt.get(["commands"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
    if (err) {
          //return onErr(err);
          console.log(err);
          return;
      }
  
    console.log("Données reçues :");
    console.log("=> commands:" + res.commands); });

    function pilotCommands(com){
        
    }

    var com="aze";
    for (i=0; i <com.length(); i++){
        if(com.charAt(i) === "a")
            turnRight();

        else if (com.charAt(i) === "z")
        turnLeft();

        else if (com.charAt(i) === "e")
            moveForward();
    }